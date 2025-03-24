const fs = require('fs');
const path = require('path');

// Instructions for the user:
console.log('===== Profile Image Helper =====');
console.log('This script helps you save your profile image to the correct location.');
console.log('');
console.log('Please place your profile image in the same directory as this script');
console.log('and rename it to "my-img.jpg" before running this script.');
console.log('');
console.log('To run this script: node save-image.js');
console.log('');

const sourceImagePath = path.join(__dirname, 'my-img.jpg');
const targetDirectory = path.join(__dirname, 'public', 'images');
const targetImagePath = path.join(targetDirectory, 'profile.jpg');

// Check if source image exists
if (!fs.existsSync(sourceImagePath)) {
  console.error('Error: Source image not found!');
  console.error('Please place your image in this directory and name it "my-img.jpg"');
  process.exit(1);
}

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDirectory)) {
  console.log('Creating images directory...');
  fs.mkdirSync(targetDirectory, { recursive: true });
}

// Copy the image
try {
  fs.copyFileSync(sourceImagePath, targetImagePath);
  console.log('Success! Your profile image has been copied to:', targetImagePath);
  console.log('You can now use it in your portfolio.');
} catch (error) {
  console.error('Error copying the file:', error.message);
  process.exit(1);
} 