import User from "../models/User.js";
import fs from "fs";
import base64 from "../utils/base64.js";

export const registerView = (req, res) => {
  res.render('register', { title: 'Register | ' });
}

export const loginView = (req, res) => {
  res.render('register', { title: 'Login | ' });
};

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const profilePicture = req.file;

    if (!username) return res.status(400).json({ message: 'Username is required!' });
    if (!password) return res.status(400).json({ message: 'Password is required!' });
    if (!profilePicture) return res.status(400).json({ message: 'Profile picture is required!' });

    const ppBuffer = fs.readFileSync(profilePicture.path);

    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ message: 'Username already exists!' });

    const hashedPassword = `*${password}`;

    const newUser = new User({
      username,
      password: hashedPassword,
      profilePicture: ppBuffer,
      activeStatus: true,
    })

    await newUser.save();

    res.status(201).json({ message: true, newUser });

    fs.unlinkSync(profilePicture.path);

  } catch (error) {
    res.status(500).json({ message: 'Error processing image!' });
  }
}

export const loginUser = (req, res) => { }

export const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  const profilePictureBase64 = base64(user.profilePicture);

  res.render('profile', { user, title: 'Profile | ', profilePictureBase64 });
}
