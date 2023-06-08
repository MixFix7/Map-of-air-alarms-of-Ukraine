# Map-of-air-alarms-of-Ukraine

![Map of air alarms of Ukraine](https://raw.githubusercontent.com/MixFix7/Map-of-air-alarms-of-Ukraine/master/map_Ukraine_img.png)

This repository contains a Django-based web application that displays a map of Ukraine with marked regions where air alarms are currently active. The purpose of this project is to provide real-time information about air pollution levels in different areas of Ukraine.

## Features

- Real-time data: The map is updated in real-time, providing the latest information about air alarms across different regions of Ukraine.
- Region markers: Each region with an active air alarm is marked with a specific icon on the map, making it easy for users to identify the affected areas.
- Responsive design: The web application is designed to be responsive and accessible on different devices, including desktops, tablets, and mobile phones.

## Installation

To set up the Map-of-air-alarms-of-Ukraine project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/Map-of-air-alarms-of-Ukraine.git
```

2. Navigate to the project directory:

```bash
cd Map-of-air-alarms-of-Ukraine
```

3. Create a virtual environment (optional but recommended):

```bash
python -m venv env
```

4. Activate the virtual environment:

```bash
# For Windows
env\Scripts\activate

# For macOS/Linux
source env/bin/activate
```

5. Install the dependencies:

```bash
pip install -r requirements.txt
```

6. Set up the database:

```bash
python manage.py migrate
```

7. Start the development server:

```bash
python manage.py runserver
```

8. You need a use air alert ukraine api, to get information of alarms in Ukraine status:

Open your web browser and go to http://localhost:8000 to view the map of air alarms of Ukraine.


## License

The Map-of-air-alarms-of-Ukraine project is open source and released under the [Apache-2.0 license](LICENSE).

