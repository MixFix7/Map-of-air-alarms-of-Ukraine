import snscrape.modules.telegram as tg



def get_alarms():
    info_list = []

    scraper = tg.TelegramChannelScraper("air_alert_ua")


    for i, alarm in enumerate(scraper.get_items()):
        if i > 30:
            break
        alarms_info = f"{i} content: {alarm.content}"
        info_list.append(alarms_info)

    all = {"Запорізька": "🟢", "Тернопільська": "🟢", "Луганська": "🔴", "Кримська": "🔴", "Донецька": "🟢",
            "Харківська": "🟢", "Львівська": "🟢", "Рівненська": "🟢", "Закарпатська": "🟢", "Луцька": "🟢",
            "Хмельницька": "🟢", "Кіровоградська": "🟢", "Херсонська": "🟢", "Київська": "🟢",
            "м.Київ": "🟢", "Волинська": "🟢", "Івано-Франківська": "🟢", "Вінницька": "🟢", "Житомирська": "🟢",
            "Миколаївська": "🟢", "Одеська": "🟢", "Дніпропетровська": "🟢", "Сумська": "🟢", "Чернігівська": "🟢",
            "Черкаська": "🟢", "Полтавська": "🟢", "Чернівецька": "🟢"}


    info_list_rev = info_list[::-1]

    for item in info_list_rev:
        if "Запорізька" in item and "Відбій" in item:
            all["Запорізька"] = '🟢'
        elif "Запорізька" in item and "тривога" in item:
            all["Запорізька"] = '🔴'
        if "Донецька" in item and "Відбій" in item:
            all["Донецька"] = "🟢"
        elif "Донецька" in item and "тривога" in item:
            all["Донецька"] = "🔴"
        if "Харківська" in item and "Відбій" in item:
            all["Харківська"] = "🟢"
        elif "Харківська" in item and "тривога" in item:
            all["Харківська"] = "🔴"
        if "Тернопільська" in item and "Відбій" in item:
            all["Тернопільська"] = '🟢'
        elif "Тернопільська" in item and "Відбій" in item:
            all["Тернопільська"] = '🔴'
        if "Рівненська" in item and "Відбій" in item:
            all["Рівненська"] = "🟢"
        elif "Рівненська" in item and "тривога" in item:
            all["Рівненська"] = "🔴"
        if "Львівська" in item and "Відбій" in item:
            all["Львівська"] = "🟢"
        elif "Львівська" in item and "тривога" in item:
            all["Львівська"] = "🔴"
        if "Закарпатська" in item and "Відбій" in item:
            all["Закарпатська"] = '🟢'
        elif "Закарпатська" in item and "Відбій" in item:
            all["Закарпатська"] = '🔴'
        if "Луцька" in item and "Відбій" in item:
            all["Луцька"] = "🟢"
        elif "Луцька" in item and "тривога" in item:
            all["Луцька"] = "🔴"
        if "Хмельницька" in item and "Відбій" in item:
            all["Хмельницька"] = "🟢"
        elif "Хмельницька" in item and "тривога" in item:
            all["Хмельницька"] = "🔴"
        if "Херсонська" in item and "Відбій" in item:
            all["Херсонська"] = "🟢"
        elif "Херсонська" in item and "тривога" in item:
            all["Херсонська"] = "🔴"
        if "Кіровоградська" in item and "Відбій" in item:
            all["Кіровоградська"] = "🟢"
        elif "Кіровоградська" in item and "тривога" in item:
            all["Кіровоградська"] = "🔴"
        if "Київська" in item and "Відбій" in item:
            all["Київська"] = "🟢"
        elif "Київська" in item and "тривога" in item:
            all["Київська"] = "🔴"
        if "м.Київ" in item and "Відбій" in item:
            all["м.Київ"] = "🟢"
        elif "м.Київ" in item and "тривога" in item:
            all["м.Київ"] = "🔴"
        if "Миколаївська" in item and "Відбій" in item:
            all["Миколаївська"] = "🟢"
        elif "Миколаївська" in item and "тривога" in item:
            all["Миколаївська"] = "🔴"
        if "Одеська" in item and "Відбій" in item:
            all["Одеська"] = "🟢"
        elif "Одеська" in item and "тривога" in item:
            all["Одеська"] = "🔴"
        if "Дніпропетровська" in item and "Відбій" in item:
            all["Дніпропетровська"] = "🟢"
        elif "Дніпропетровська" in item and "тривога" in item:
            all["Дніпропетровська"] = "🔴"
        if "Сумська" in item and "Відбій" in item:
            all["Сумська"] = "🟢"
        elif "Сумська" in item and "тривога" in item:
            all["Сумська"] = "🔴"
        if "Чернігівська" in item and "Відбій" in item:
            all["Чернігівська"] = "🟢"
        elif "Чернігівська" in item and "тривога" in item:
            all["Чернігівська"] = "🔴"
        if "Чернівецька" in item and "Відбій" in item:
            all["Чернівецька"] = "🟢"
        if "Житомирська" in item and "Відбій" in item:
            all["Житомирська"] = "🟢"
        elif "Житомирська" in item and "тривога" in item:
            all["Житомирська"] = "🔴"
        if "Черкаська" in item and "Відбій" in item:
            all["Черкаська"] = "🟢"
        elif "Черкаська" in item and "тривога" in item:
            all["Черкаська"] = "🔴"
        if "Полтавська" in item and "Відбій" in item:
            all["Полтавська"] = "🟢"
        elif "Полтавська" in item and "тривога" in item:
            all["Полтавська"] = "🔴"
        if "Івано-Франківстка" in item and "Відбій" in item:
            all["Івано-Франківська"] = "🟢"
        elif "Івано-Франківська" in item and "тривога" in item:
            all["Івано-Франківська"] = "🔴"


    return all


print(get_alarms())