require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const mongoose = require('mongoose');
const User = require('./models/User');

const viewDatabase = async () => {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log("Connected Successfully!\n");
    
    console.log("Fetching users from the 'growie_db' database...\n");
    const users = await User.find({}).select('-__v'); // Exclude mongoose version key
    
    if (users.length === 0) {
      console.log("No users found! Try registering someone on the website first.");
    } else {
      console.table(users.map(user => ({
        ID: user._id.toString(),
        Name: user.name,
        Email: user.email,
        "Password Hash (Hidden)": "********",
        Created: user.createdAt.toISOString()
      })));
    }
    
  } catch (err) {
    console.error("Error connecting to DB:", err.message);
  } finally {
    mongoose.connection.close();
    process.exit();
  }
};

viewDatabase();
