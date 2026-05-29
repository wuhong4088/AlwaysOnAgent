"""A Python FastMCP server acting as a bridge.
It exposes standard MCP tools to the Rasa Sub-agent, and translates 
them into HTTP requests to our Node.js CookSmart backend.

Run:  make run-mcp   ->  http://localhost:8000/mcp
"""

import json
import requests
from fastmcp import FastMCP

mcp = FastMCP("CookSmart Tools")
BACKEND_URL = "http://localhost:4000/mcp"

@mcp.tool()
def search_recipes(ingredients: str, preference: str = "") -> str:
    """Search for recipe recommendations based on ingredients and user preferences."""
    try:
        response = requests.post(
            f"{BACKEND_URL}/search_recipes",
            json={"ingredients": ingredients, "preference": preference}
        )
        return json.dumps(response.json())
    except Exception as e:
        return json.dumps({"error": str(e)})

@mcp.tool()
def add_to_shopping_list(items: str) -> str:
    """Add missing ingredients to the user's shopping list. items should be a comma-separated string."""
    try:
        response = requests.post(
            f"{BACKEND_URL}/add_to_shopping_list",
            json={"items": items}
        )
        return json.dumps(response.json())
    except Exception as e:
        return json.dumps({"error": str(e)})

@mcp.tool()
def get_user_dietary_profile() -> str:
    """Fetch the user's long-term dietary profile, including allergies and goals."""
    try:
        response = requests.get(f"{BACKEND_URL}/get_user_dietary_profile")
        return json.dumps(response.json())
    except Exception as e:
        return json.dumps({"error": str(e)})

@mcp.tool()
def toggle_admin_feature_flag(feature_name: str, status: bool) -> str:
    """Admin tool: toggle a system feature flag on or off."""
    try:
        response = requests.post(
            f"{BACKEND_URL}/toggle_admin_feature_flag",
            json={"feature_name": feature_name, "status": status}
        )
        return json.dumps(response.json())
    except Exception as e:
        return json.dumps({"error": str(e)})


if __name__ == "__main__":
    print("CookSmart MCP proxy server running -> http://localhost:8000/mcp")
    mcp.run(transport="http", host="0.0.0.0", port=8000, path="/mcp")
