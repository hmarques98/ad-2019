import { Response, Request } from "express";
import User from "../models/User";
import { sendEmail } from "../utils/sendEmail";

export default {
  async index(request: Request, response: Response) {},
  async show(request: Request, response: Response) {
    try {
      const users = await User.find({}, {}, { limit: 10, skip: 0 });
      // const drawnUser = draw(users);

      // const nameFriendSender = drawnUser.map((user) => {
      //   return user.friendSender._id;
      // });

      // const secretFriend = drawnUser.map((user) => {
      //   return user.secretFriendDrawn.name;
      // });

      // const user = await User.updateMany(
      //   { name: idFriendSender },
      //   {
      //     $push: {
      //       secretFriend: secretFriend,
      //     },
      //   }
      // );
      // await user?.save();

      // if (!user) {
      //   return response.status(404).json("not found");
      // }
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json("Error");
    }
  },
  async create(request: Request, response: Response) {
    try {
      const data = request.body;
      const users = await User.insertMany(data);
      await users.save((err, result) => {
        if (err) {
          console.log("error");
        }
        response.json("user created");
      });
      const user = await User.find();
      // if (user.length >= 4) {
      //   const send = sendEmail(user);

      //   if (send) {
      //     return response.status(200).json("o email foi enviado");
      //   } else {
      //     return response.status(400).json("Deu errado");
      //   }
      // }
    } catch (error) {
      response.json(error);
    }
  },
  async update(request: Request, response: Response) {
    // const { id } = request.params;

    try {
      const users = await User.find();
      // const drawnUser = draw(users);
      // const idFriendSender = drawnUser.map((user) => {
      //   return user.friendSender._id;
      // });

      // const secretFriend = drawnUser.map((user) => {
      //   return user.secretFriendDrawn.name;
      // });
      // console.log(secretFriend);
      // const user = await User.updateMany(
      //   { _id: idFriendSender },
      //   { secretFriend: secretFriend },
      //   {
      //     new: true,
      //   }
      // );
      // await users.save();
      if (!users) {
        return response.status(404).json("not found");
      }
      return response.status(200).json(users);
    } catch (err) {
      response.status(500).json(err);
    }
  },
  async delete(request: Request, response: Response) {
    const { emailUser } = request.params;
    const userDeleted = await User.findOneAndDelete({ email: emailUser });
    // await userDeleted?.save();
    if (!userDeleted) {
      return response.status(404).json({ message: "user not found" });
    }
    return response.json({ userDeleted });
  },
};
