import requests
import time
import json

RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

test_cases = [
    {"name": "Greeting / Out of scope", "input": "你好"},
    {"name": "Trigger Cooking Flow", "input": "我肚子有點餓，但我只有雞肉和高麗菜，可以做什麼？"},
    {"name": "Follow up - Choose Recipe", "input": "聽起來不錯，就做那個炒雞肉吧！需要多長的時間？"},
    {"name": "Add to Shopping List", "input": "我沒有醬油了，幫我加進購物車"},
]

results = []

def run_tests():
    print("Starting Automated Agent Tests...")
    for idx, tc in enumerate(test_cases):
        print(f"\n[{idx+1}] Testing: {tc['name']}")
        print(f"User: {tc['input']}")
        try:
            resp = requests.post(RASA_URL, json={"sender": "test_script", "message": tc["input"]})
            if resp.status_code == 200:
                data = resp.json()
                bot_responses = [msg.get("text", "") for msg in data]
                bot_text = "\n".join(bot_responses)
                print(f"Bot: {bot_text}")
                results.append({
                    "case": tc["name"],
                    "input": tc["input"],
                    "output": bot_text,
                    "status": "Pass" if bot_text else "Fail (Empty)"
                })
            else:
                print(f"Error: HTTP {resp.status_code}")
                results.append({
                    "case": tc["name"],
                    "input": tc["input"],
                    "output": f"HTTP {resp.status_code}",
                    "status": "Fail"
                })
        except Exception as e:
            print(f"Exception: {str(e)}")
            results.append({
                "case": tc["name"],
                "input": tc["input"],
                "output": str(e),
                "status": "Error"
            })
        
        # small delay between requests
        time.sleep(2)

    with open("test_results.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    run_tests()
