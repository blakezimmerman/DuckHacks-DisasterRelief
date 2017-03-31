# Disaster Relief Info Hub (DuckHacks 2017 Project)

This project was put together in 24 hours by Blake Zimmerman, Connor Zapfel, and Matt Colozzo for the Stevens DuckHacks 2017 Hackathon.

This project aims to be an easy way for a disaster relief team to spin up a full web stack for sharing information about a disaster after it occurs. This stack includes a simple python gui for deploying the web stack, and the web stack itself uses Angular for its frontend and Node.js for its backend. The front end contains a configuration page where the user can add various types of information about the disaster and then a dashboard will dynamically populate itself with components based on what the user inputted to the configuration page.

## Setup

Be sure to have Python 2, Kivy, and NPM installed. Then in the root directy of the project run `npm install` to install the rest of the web dependencies.

Once all of the dependencies are installed, run `python duckhacks2017gui.py` from the root directory of the project.
