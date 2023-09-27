# Password Generator

## Description

This project is design to generate a random password based on a series of configurable options decided by the user. This project is mainly JavaScript with minimal HTML and CSS. This generator is designed mainly to serve as a practice project for writting in JavaScript and extend my grasp on the coding language. The generator presents a prompt once the 'Generate Password' button is pressed, and the prompt requests a number input for the user for the length.

![Screenshot of the Password Generator page with a prompt requesting a number for the length of the password](/assets/images/length_prompt.png)

The prompt states that the length must be from 8-128. Should the user enter an invalid entry, a confirmation prompt will appear on the page stating that the length must be a number between 8-128. From here the user can only select 'OK' which will return the user to the previous prompt, or 'Cancel' will will remove all prompts anc cancel the password generation process.

![Screenshot of Password Generator page with a prompt stating that the length value must be from 8-128](/assets/images/invalid_length_prompt.png)

Once an acceptable length has been input by the user, then the first of four prompts for the character configuration will appear. Each prompt will have the 'OK' and 'Cancel' options, but these function as 'Yes' or 'No' in these cases. The first will ask if you would like lowercase characters in your possword, the second will ask if you would like uppercase characters, then numerical and finally special characters. 

![Screenshot of Password Generator page with a prompt stating to click 'OK' for lowercase characters](/assets/images/first_character_prompt.png)

Once the user has made their choice on the final prompt, a password will generate in the box at the center of the page. This password will have all of the configured features and can be copied for use. It should also be noted that all of the input is output to the console which is only viewable through some sort of dev tool such as Chrom DevTools. The password is also peiced together in the console, so it's possible to also view the proccess it undertook as each character was added.

Deployed project: https://distantdig.github.io/password-generator/