import { Response, Request } from "express";
import Draw from "../models/Draw";
import { sendEmail } from "../utils/sendEmail";

interface IDraw {
  name: string;
  secretFriend: string;
  email: string;
}

export default {
  async index(request: Request, response: Response) {},
  async show(request: Request, response: Response) {
    try {
      const registersInDB = await Draw.find().sort({ _id: -1 }).limit(1);
      const res = registersInDB.map((items: [] | any) => {
        return items.draw.map((item: IDraw) => ({
          name: item.name,
          secretFriend: item.secretFriend,
          email: item.email,
        }));
      });

      return response.status(200).json(res);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async create(request: Request, response: Response) {
    try {
      const { draw } = request.body;
      const drawers = draw.map((items: IDraw) => {
        return {
          name: items.name,
          email: items.email,
          secretFriend: items.secretFriend,
        };
      });
      const { who } = request.body;
      const data = {
        draw: drawers,
        who,
      };

      await Draw.insertMany(data);

      //sorteio
      const registersInDB = await Draw.find().sort({ _id: -1 }).limit(1);
      const drawersLength = registersInDB.map((items: [] | any) => {
        return items.draw;
      });

      if (drawersLength.length % 2) {
        let send = sendEmail(registersInDB);
        if (send) {
          response.status(201).json({ message: "Draw was done" });
        } else {
          response.json("error");
        }
      }
    } catch (error) {
      response.json(error);
    }
  },
  async update(request: Request, response: Response) {
    try {
      const draw = await Draw.find();
      if (!draw) {
        return response.status(404).json("not found");
      }
      return response.status(200).json(draw);
    } catch (err) {
      response.status(500).json(err);
    }
  },
  async delete(request: Request, response: Response) {
    const { emailDraw } = request.params;
    const DrawDeleted = await Draw.findOneAndDelete({ email: emailDraw });
    // await DrawDeleted?.save();
    if (!DrawDeleted) {
      return response.status(404).json({ message: "Draw not found" });
    }
    return response.json({ DrawDeleted });
  },
};
