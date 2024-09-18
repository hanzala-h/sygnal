import multer from "multer";
import express from "express";
import * as uc from "../controllers/userController.js";

const userRouter = express.Router();

const upload = multer({ dest: '../public/data/uploads/' });

userRouter.get('/register', uc.registerView);
userRouter.post('/register', upload.single('profilePicture'), uc.registerUser);
userRouter.get('/login', uc.loginView);
userRouter.post('/login', uc.loginUser);
userRouter.get('/profile/:id', uc.profile);

export default userRouter;
