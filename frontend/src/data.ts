import { Recipe } from './types';

export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCdyOmM_hLGlDZIFljaMKpI_XlM5b173YeHmNxYLorCCz9ONGWrcXnly8FP4LNBQCaWzPpTK6htq1SleeWS-bqb_pX4_it5O97huCpMtlUkH7nhcp14oUZYMcI93dFb7qeY4FUGHs6p6-xwOp-9xlWXGNyrAcrx5Y4boYUdLRw8nfqZc5kq3qVXdbx8IyXho6G-aZbiNdKHWZHWBgCikxH0r1gC4nCDVC54mO5fsqwifydXnpFA_i4Iq6U8CchcQsfwReqbG7moNxU";

export function getCategoryColor(category: string): string {
  switch (category) {
    case '全部':
      return 'bg-surface-container-high text-on-surface';
    case '快速':
      return 'bg-blue-100 text-blue-800';
    case '健康':
      return 'bg-green-100 text-green-800';
    case '素食':
      return 'bg-emerald-100 text-emerald-800';
    case '純素':
      return 'bg-lime-100 text-lime-800';
    case '蛋奶素':
      return 'bg-cyan-100 text-cyan-800';
    case '高蛋白':
      return 'bg-red-100 text-red-800';
    case '低熱量':
      return 'bg-teal-100 text-teal-800';
    case '隨機':
      return 'bg-purple-100 text-purple-800';
    case '早餐':
      return 'bg-yellow-100 text-yellow-800';
    case '晚餐':
      return 'bg-indigo-100 text-indigo-800';
    case '甜點':
      return 'bg-pink-100 text-pink-800';
    default:
      return 'bg-orange-100 text-orange-800';
  }
}

export const RECIPES: Recipe[] = [
  {
    "id": "1",
    "title": "義式烤番茄湯",
    "description": "溫暖舒適的經典湯品，濃郁的番茄香氣搭配酥脆麵包，暖心又暖胃。",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    "time": "30 分鐘",
    "tags": [
      "蛋奶素",
      "健康",
      "晚餐",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i1_0",
        "name": "番茄",
        "amount": "3 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i1_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i1_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i1_3",
        "name": "麵包",
        "amount": "2 片",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將番茄對半切開，洋蔥切大塊，大蒜拍碎。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤盤，淋上橄欖油，以200度烤30分鐘至表面微焦。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將烤好的蔬菜放入果汁機打成濃湯，可加少許高湯調整濃稠度。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "搭配烤至酥脆的麵包片一起享用。",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "2",
    "title": "香煎鮭魚排",
    "description": "富含Omega-3的美味主食，簡單調味就能帶出食材本身的鮮甜。",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    "time": "20 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i2_0",
        "name": "鮭魚",
        "amount": "1 片",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i2_1",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i2_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "鮭魚洗淨擦乾水分，表面均勻抹上鹽巴與黑胡椒。",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋熱鍋，加入少許油，將鮭魚皮朝下放入。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "中火煎約4分鐘至表面金黃，翻面繼續煎約3分鐘。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      },
      {
        "text": "起鍋前加入大蒜與奶油稍微融化淋在魚肉上即可。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "3",
    "title": "地中海烤雞胸",
    "description": "經典地中海風味，多種香料醃製，肉質軟嫩多汁。",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i3_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i3_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i3_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      },
      {
        "id": "i3_3",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "雞胸肉表面劃刀，加入蒜碎、橄欖油與香料醃製。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄切塊，與醃好的雞胸肉放上烤盤。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤箱以200度烤約20分鐘。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      },
      {
        "text": "確認中心熟透後即可出爐，淋上些許檸檬汁更提味。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "4",
    "title": "燕麥蛋白鬆餅",
    "description": "完美的高蛋白早午餐選擇，不用擔心碳水超標。",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "高蛋白",
      "早餐",
      "甜點",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i4_0",
        "name": "燕麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      },
      {
        "id": "i4_1",
        "name": "雞蛋",
        "amount": "2 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i4_2",
        "name": "鮮奶",
        "amount": "100ml",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將燕麥放入果汁機打成粉狀。",
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop"
      },
      {
        "text": "加入雞蛋、鮮奶均勻攪拌成麵糊。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋微微加熱，倒入適量麵糊。",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop"
      },
      {
        "text": "煎至表面起泡後翻面，再煎約1分鐘即可。",
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "5",
    "title": "泰式綠咖哩雞",
    "description": "濃郁椰香與香茅的完美融合，微辣的口感超級下飯。",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    "time": "40 分鐘",
    "tags": [
      "晚餐"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i5_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i5_1",
        "name": "椰奶",
        "amount": "200ml",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550989255-bfaeb9255c2f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i5_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "洋蔥切丁，雞胸肉切塊備用。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋將洋蔥炒軟後，加入綠咖哩醬炒香。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入雞肉拌炒至表面變色。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入椰奶小火燉煮10分鐘至雞肉熟透。",
        "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "6",
    "title": "莓果優格碗",
    "description": "充滿抗氧化物的清爽早點，酸甜適中最適合喚醒慵懶的早晨。",
    "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop",
    "time": "5 分鐘",
    "tags": [
      "快速",
      "早餐",
      "健康",
      "素食"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i6_0",
        "name": "優格",
        "amount": "1 杯",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1584278858277-2e11e5fa0af6?w=150&auto=format&fit=crop"
      },
      {
        "id": "i6_1",
        "name": "藍莓",
        "amount": "半杯",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=150&auto=format&fit=crop"
      },
      {
        "id": "i6_2",
        "name": "燕麥",
        "amount": "少許",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將無糖優格倒入碗中作為基底。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "藍莓洗淨後瀝乾水分。",
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藍莓均勻鋪在優格上。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後撒上一層燕麥即可享用。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "7",
    "title": "韓式拌飯",
    "description": "豐富的蔬菜與微辣的拌飯醬，營養均衡又美味。",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    "time": "35 分鐘",
    "tags": [
      "晚餐",
      "健康"
    ],
    "prepTime": "20 min prep",
    "ingredients": [
      {
        "id": "i7_0",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i7_1",
        "name": "雞蛋",
        "amount": "1 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i7_2",
        "name": "韓式辣醬",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1581451523490-b18c95a04eb0?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "菠菜川燙後瀝乾，加入少許麻油拌勻。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋煎一顆半熟蛋。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "碗中盛入白飯，擺上菠菜與煎蛋。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後加入一大匙韓式辣醬拌勻即可。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "8",
    "title": "蘑菇菠菜烘蛋",
    "description": "豐富的蛋白質與蔬菜，適合週末早晨的悠閒時光。",
    "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "素食",
      "早餐",
      "高蛋白",
      "快速"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i8_0",
        "name": "蘑菇",
        "amount": "1 碗",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1511215456208-8e6f308feefa?w=150&auto=format&fit=crop"
      },
      {
        "id": "i8_1",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i8_2",
        "name": "雞蛋",
        "amount": "3 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i8_3",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "蘑菇切片，菠菜洗淨切段備用。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "雞蛋打入碗中加入少許鹽巴打勻。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋炒香大蒜，放入蘑菇與菠菜略炒。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入蛋液，小火烘至蛋液凝固即可。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "9",
    "title": "蒜香蒜片義大利麵",
    "description": "最純粹的義式風味，只需要簡單的幾樣食材。",
    "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "快速",
      "素食",
      "晚餐"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i9_0",
        "name": "義大利麵",
        "amount": "1 把",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a1?w=150&auto=format&fit=crop"
      },
      {
        "id": "i9_1",
        "name": "大蒜",
        "amount": "5 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i9_2",
        "name": "橄欖油",
        "amount": "2 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "滾水中加入少許鹽巴，將義大利麵煮至8分熟。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      },
      {
        "text": "大蒜切片備用。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "冷油下蒜片，小火煸至蒜片呈金黃色後撈出。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "將麵條放入蒜油中拌炒，撒上酥脆蒜片即可。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "10",
    "title": "酪梨藜麥碗 (變奏版 1)",
    "description": "清爽健康的能量來源，充滿豐富的植物蛋白與優質脂肪。",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "純素",
      "健康",
      "低熱量",
      "快速"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i10_0",
        "name": "藜麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop"
      },
      {
        "id": "i10_1",
        "name": "酪梨",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&auto=format&fit=crop"
      },
      {
        "id": "i10_2",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i10_3",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將藜麥洗淨後，以1:1.5的水量煮熟放涼備用。",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop"
      },
      {
        "text": "酪梨對半切開，去籽後切成薄片或塊狀。",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄洗淨切丁。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藜麥鋪於碗底，依序擺上酪梨與番茄，淋上橄欖油即可。",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "11",
    "title": "義式烤番茄湯 (變奏版 1)",
    "description": "溫暖舒適的經典湯品，濃郁的番茄香氣搭配酥脆麵包，暖心又暖胃。",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    "time": "30 分鐘",
    "tags": [
      "蛋奶素",
      "健康",
      "晚餐",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i11_0",
        "name": "番茄",
        "amount": "3 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i11_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i11_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i11_3",
        "name": "麵包",
        "amount": "2 片",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將番茄對半切開，洋蔥切大塊，大蒜拍碎。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤盤，淋上橄欖油，以200度烤30分鐘至表面微焦。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將烤好的蔬菜放入果汁機打成濃湯，可加少許高湯調整濃稠度。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "搭配烤至酥脆的麵包片一起享用。",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "12",
    "title": "香煎鮭魚排 (變奏版 1)",
    "description": "富含Omega-3的美味主食，簡單調味就能帶出食材本身的鮮甜。",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    "time": "20 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i12_0",
        "name": "鮭魚",
        "amount": "1 片",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i12_1",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i12_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "鮭魚洗淨擦乾水分，表面均勻抹上鹽巴與黑胡椒。",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋熱鍋，加入少許油，將鮭魚皮朝下放入。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "中火煎約4分鐘至表面金黃，翻面繼續煎約3分鐘。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      },
      {
        "text": "起鍋前加入大蒜與奶油稍微融化淋在魚肉上即可。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "13",
    "title": "地中海烤雞胸 (變奏版 1)",
    "description": "經典地中海風味，多種香料醃製，肉質軟嫩多汁。",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i13_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i13_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i13_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      },
      {
        "id": "i13_3",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "雞胸肉表面劃刀，加入蒜碎、橄欖油與香料醃製。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄切塊，與醃好的雞胸肉放上烤盤。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤箱以200度烤約20分鐘。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      },
      {
        "text": "確認中心熟透後即可出爐，淋上些許檸檬汁更提味。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "14",
    "title": "燕麥蛋白鬆餅 (變奏版 1)",
    "description": "完美的高蛋白早午餐選擇，不用擔心碳水超標。",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "高蛋白",
      "早餐",
      "甜點",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i14_0",
        "name": "燕麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      },
      {
        "id": "i14_1",
        "name": "雞蛋",
        "amount": "2 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i14_2",
        "name": "鮮奶",
        "amount": "100ml",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將燕麥放入果汁機打成粉狀。",
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop"
      },
      {
        "text": "加入雞蛋、鮮奶均勻攪拌成麵糊。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋微微加熱，倒入適量麵糊。",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop"
      },
      {
        "text": "煎至表面起泡後翻面，再煎約1分鐘即可。",
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "15",
    "title": "泰式綠咖哩雞 (變奏版 1)",
    "description": "濃郁椰香與香茅的完美融合，微辣的口感超級下飯。",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    "time": "40 分鐘",
    "tags": [
      "晚餐"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i15_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i15_1",
        "name": "椰奶",
        "amount": "200ml",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550989255-bfaeb9255c2f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i15_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "洋蔥切丁，雞胸肉切塊備用。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋將洋蔥炒軟後，加入綠咖哩醬炒香。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入雞肉拌炒至表面變色。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入椰奶小火燉煮10分鐘至雞肉熟透。",
        "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "16",
    "title": "莓果優格碗 (變奏版 1)",
    "description": "充滿抗氧化物的清爽早點，酸甜適中最適合喚醒慵懶的早晨。",
    "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop",
    "time": "5 分鐘",
    "tags": [
      "快速",
      "早餐",
      "健康",
      "素食"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i16_0",
        "name": "優格",
        "amount": "1 杯",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1584278858277-2e11e5fa0af6?w=150&auto=format&fit=crop"
      },
      {
        "id": "i16_1",
        "name": "藍莓",
        "amount": "半杯",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=150&auto=format&fit=crop"
      },
      {
        "id": "i16_2",
        "name": "燕麥",
        "amount": "少許",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將無糖優格倒入碗中作為基底。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "藍莓洗淨後瀝乾水分。",
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藍莓均勻鋪在優格上。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後撒上一層燕麥即可享用。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "17",
    "title": "韓式拌飯 (變奏版 1)",
    "description": "豐富的蔬菜與微辣的拌飯醬，營養均衡又美味。",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    "time": "35 分鐘",
    "tags": [
      "晚餐",
      "健康"
    ],
    "prepTime": "20 min prep",
    "ingredients": [
      {
        "id": "i17_0",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i17_1",
        "name": "雞蛋",
        "amount": "1 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i17_2",
        "name": "韓式辣醬",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1581451523490-b18c95a04eb0?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "菠菜川燙後瀝乾，加入少許麻油拌勻。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋煎一顆半熟蛋。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "碗中盛入白飯，擺上菠菜與煎蛋。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後加入一大匙韓式辣醬拌勻即可。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "18",
    "title": "蘑菇菠菜烘蛋 (變奏版 1)",
    "description": "豐富的蛋白質與蔬菜，適合週末早晨的悠閒時光。",
    "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "素食",
      "早餐",
      "高蛋白"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i18_0",
        "name": "蘑菇",
        "amount": "1 碗",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1511215456208-8e6f308feefa?w=150&auto=format&fit=crop"
      },
      {
        "id": "i18_1",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i18_2",
        "name": "雞蛋",
        "amount": "3 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i18_3",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "蘑菇切片，菠菜洗淨切段備用。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "雞蛋打入碗中加入少許鹽巴打勻。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋炒香大蒜，放入蘑菇與菠菜略炒。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入蛋液，小火烘至蛋液凝固即可。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "19",
    "title": "蒜香蒜片義大利麵 (變奏版 1)",
    "description": "最純粹的義式風味，只需要簡單的幾樣食材。",
    "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "快速",
      "素食",
      "晚餐"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i19_0",
        "name": "義大利麵",
        "amount": "1 把",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a1?w=150&auto=format&fit=crop"
      },
      {
        "id": "i19_1",
        "name": "大蒜",
        "amount": "5 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i19_2",
        "name": "橄欖油",
        "amount": "2 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "滾水中加入少許鹽巴，將義大利麵煮至8分熟。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      },
      {
        "text": "大蒜切片備用。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "冷油下蒜片，小火煸至蒜片呈金黃色後撈出。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "將麵條放入蒜油中拌炒，撒上酥脆蒜片即可。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "20",
    "title": "酪梨藜麥碗 (變奏版 2)",
    "description": "清爽健康的能量來源，充滿豐富的植物蛋白與優質脂肪。",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "純素",
      "健康",
      "低熱量",
      "快速"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i20_0",
        "name": "藜麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop"
      },
      {
        "id": "i20_1",
        "name": "酪梨",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&auto=format&fit=crop"
      },
      {
        "id": "i20_2",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i20_3",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將藜麥洗淨後，以1:1.5的水量煮熟放涼備用。",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop"
      },
      {
        "text": "酪梨對半切開，去籽後切成薄片或塊狀。",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄洗淨切丁。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藜麥鋪於碗底，依序擺上酪梨與番茄，淋上橄欖油即可。",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "21",
    "title": "義式烤番茄湯 (變奏版 2)",
    "description": "溫暖舒適的經典湯品，濃郁的番茄香氣搭配酥脆麵包，暖心又暖胃。",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    "time": "30 分鐘",
    "tags": [
      "蛋奶素",
      "健康",
      "晚餐",
      "低熱量",
      "快速"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i21_0",
        "name": "番茄",
        "amount": "3 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i21_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i21_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i21_3",
        "name": "麵包",
        "amount": "2 片",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將番茄對半切開，洋蔥切大塊，大蒜拍碎。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤盤，淋上橄欖油，以200度烤30分鐘至表面微焦。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將烤好的蔬菜放入果汁機打成濃湯，可加少許高湯調整濃稠度。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "搭配烤至酥脆的麵包片一起享用。",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "22",
    "title": "香煎鮭魚排 (變奏版 2)",
    "description": "富含Omega-3的美味主食，簡單調味就能帶出食材本身的鮮甜。",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    "time": "20 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i22_0",
        "name": "鮭魚",
        "amount": "1 片",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i22_1",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i22_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "鮭魚洗淨擦乾水分，表面均勻抹上鹽巴與黑胡椒。",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋熱鍋，加入少許油，將鮭魚皮朝下放入。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "中火煎約4分鐘至表面金黃，翻面繼續煎約3分鐘。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      },
      {
        "text": "起鍋前加入大蒜與奶油稍微融化淋在魚肉上即可。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "23",
    "title": "地中海烤雞胸 (變奏版 2)",
    "description": "經典地中海風味，多種香料醃製，肉質軟嫩多汁。",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i23_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i23_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i23_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      },
      {
        "id": "i23_3",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "雞胸肉表面劃刀，加入蒜碎、橄欖油與香料醃製。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄切塊，與醃好的雞胸肉放上烤盤。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤箱以200度烤約20分鐘。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      },
      {
        "text": "確認中心熟透後即可出爐，淋上些許檸檬汁更提味。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "24",
    "title": "燕麥蛋白鬆餅 (變奏版 2)",
    "description": "完美的高蛋白早午餐選擇，不用擔心碳水超標。",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "高蛋白",
      "早餐",
      "甜點",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i24_0",
        "name": "燕麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      },
      {
        "id": "i24_1",
        "name": "雞蛋",
        "amount": "2 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i24_2",
        "name": "鮮奶",
        "amount": "100ml",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將燕麥放入果汁機打成粉狀。",
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop"
      },
      {
        "text": "加入雞蛋、鮮奶均勻攪拌成麵糊。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋微微加熱，倒入適量麵糊。",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop"
      },
      {
        "text": "煎至表面起泡後翻面，再煎約1分鐘即可。",
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "25",
    "title": "泰式綠咖哩雞 (變奏版 2)",
    "description": "濃郁椰香與香茅的完美融合，微辣的口感超級下飯。",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    "time": "40 分鐘",
    "tags": [
      "晚餐"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i25_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i25_1",
        "name": "椰奶",
        "amount": "200ml",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550989255-bfaeb9255c2f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i25_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "洋蔥切丁，雞胸肉切塊備用。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋將洋蔥炒軟後，加入綠咖哩醬炒香。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入雞肉拌炒至表面變色。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入椰奶小火燉煮10分鐘至雞肉熟透。",
        "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "26",
    "title": "莓果優格碗 (變奏版 2)",
    "description": "充滿抗氧化物的清爽早點，酸甜適中最適合喚醒慵懶的早晨。",
    "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop",
    "time": "5 分鐘",
    "tags": [
      "快速",
      "早餐",
      "健康",
      "素食"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i26_0",
        "name": "優格",
        "amount": "1 杯",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1584278858277-2e11e5fa0af6?w=150&auto=format&fit=crop"
      },
      {
        "id": "i26_1",
        "name": "藍莓",
        "amount": "半杯",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=150&auto=format&fit=crop"
      },
      {
        "id": "i26_2",
        "name": "燕麥",
        "amount": "少許",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將無糖優格倒入碗中作為基底。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "藍莓洗淨後瀝乾水分。",
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藍莓均勻鋪在優格上。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後撒上一層燕麥即可享用。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "27",
    "title": "韓式拌飯 (變奏版 2)",
    "description": "豐富的蔬菜與微辣的拌飯醬，營養均衡又美味。",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    "time": "35 分鐘",
    "tags": [
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "20 min prep",
    "ingredients": [
      {
        "id": "i27_0",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i27_1",
        "name": "雞蛋",
        "amount": "1 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i27_2",
        "name": "韓式辣醬",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1581451523490-b18c95a04eb0?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "菠菜川燙後瀝乾，加入少許麻油拌勻。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋煎一顆半熟蛋。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "碗中盛入白飯，擺上菠菜與煎蛋。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後加入一大匙韓式辣醬拌勻即可。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "28",
    "title": "蘑菇菠菜烘蛋 (變奏版 2)",
    "description": "豐富的蛋白質與蔬菜，適合週末早晨的悠閒時光。",
    "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "素食",
      "早餐",
      "高蛋白"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i28_0",
        "name": "蘑菇",
        "amount": "1 碗",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1511215456208-8e6f308feefa?w=150&auto=format&fit=crop"
      },
      {
        "id": "i28_1",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i28_2",
        "name": "雞蛋",
        "amount": "3 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i28_3",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "蘑菇切片，菠菜洗淨切段備用。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "雞蛋打入碗中加入少許鹽巴打勻。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋炒香大蒜，放入蘑菇與菠菜略炒。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入蛋液，小火烘至蛋液凝固即可。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "29",
    "title": "蒜香蒜片義大利麵 (變奏版 2)",
    "description": "最純粹的義式風味，只需要簡單的幾樣食材。",
    "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "快速",
      "素食",
      "晚餐"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i29_0",
        "name": "義大利麵",
        "amount": "1 把",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a1?w=150&auto=format&fit=crop"
      },
      {
        "id": "i29_1",
        "name": "大蒜",
        "amount": "5 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i29_2",
        "name": "橄欖油",
        "amount": "2 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "滾水中加入少許鹽巴，將義大利麵煮至8分熟。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      },
      {
        "text": "大蒜切片備用。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "冷油下蒜片，小火煸至蒜片呈金黃色後撈出。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "將麵條放入蒜油中拌炒，撒上酥脆蒜片即可。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "30",
    "title": "酪梨藜麥碗 (變奏版 3)",
    "description": "清爽健康的能量來源，充滿豐富的植物蛋白與優質脂肪。",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "純素",
      "健康",
      "低熱量"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i30_0",
        "name": "藜麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop"
      },
      {
        "id": "i30_1",
        "name": "酪梨",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&auto=format&fit=crop"
      },
      {
        "id": "i30_2",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i30_3",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將藜麥洗淨後，以1:1.5的水量煮熟放涼備用。",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop"
      },
      {
        "text": "酪梨對半切開，去籽後切成薄片或塊狀。",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄洗淨切丁。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藜麥鋪於碗底，依序擺上酪梨與番茄，淋上橄欖油即可。",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "31",
    "title": "義式烤番茄湯 (變奏版 3)",
    "description": "溫暖舒適的經典湯品，濃郁的番茄香氣搭配酥脆麵包，暖心又暖胃。",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    "time": "30 分鐘",
    "tags": [
      "蛋奶素",
      "健康",
      "晚餐",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i31_0",
        "name": "番茄",
        "amount": "3 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i31_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i31_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i31_3",
        "name": "麵包",
        "amount": "2 片",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將番茄對半切開，洋蔥切大塊，大蒜拍碎。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤盤，淋上橄欖油，以200度烤30分鐘至表面微焦。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將烤好的蔬菜放入果汁機打成濃湯，可加少許高湯調整濃稠度。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "搭配烤至酥脆的麵包片一起享用。",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "32",
    "title": "香煎鮭魚排 (變奏版 3)",
    "description": "富含Omega-3的美味主食，簡單調味就能帶出食材本身的鮮甜。",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    "time": "20 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i32_0",
        "name": "鮭魚",
        "amount": "1 片",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i32_1",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i32_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "鮭魚洗淨擦乾水分，表面均勻抹上鹽巴與黑胡椒。",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋熱鍋，加入少許油，將鮭魚皮朝下放入。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "中火煎約4分鐘至表面金黃，翻面繼續煎約3分鐘。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      },
      {
        "text": "起鍋前加入大蒜與奶油稍微融化淋在魚肉上即可。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "33",
    "title": "地中海烤雞胸 (變奏版 3)",
    "description": "經典地中海風味，多種香料醃製，肉質軟嫩多汁。",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "低熱量",
      "快速"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i33_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i33_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i33_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      },
      {
        "id": "i33_3",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "雞胸肉表面劃刀，加入蒜碎、橄欖油與香料醃製。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄切塊，與醃好的雞胸肉放上烤盤。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤箱以200度烤約20分鐘。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      },
      {
        "text": "確認中心熟透後即可出爐，淋上些許檸檬汁更提味。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "34",
    "title": "燕麥蛋白鬆餅 (變奏版 3)",
    "description": "完美的高蛋白早午餐選擇，不用擔心碳水超標。",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "高蛋白",
      "早餐",
      "甜點",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i34_0",
        "name": "燕麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      },
      {
        "id": "i34_1",
        "name": "雞蛋",
        "amount": "2 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i34_2",
        "name": "鮮奶",
        "amount": "100ml",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將燕麥放入果汁機打成粉狀。",
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop"
      },
      {
        "text": "加入雞蛋、鮮奶均勻攪拌成麵糊。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋微微加熱，倒入適量麵糊。",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop"
      },
      {
        "text": "煎至表面起泡後翻面，再煎約1分鐘即可。",
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "35",
    "title": "泰式綠咖哩雞 (變奏版 3)",
    "description": "濃郁椰香與香茅的完美融合，微辣的口感超級下飯。",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    "time": "40 分鐘",
    "tags": [
      "晚餐",
      "快速"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i35_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i35_1",
        "name": "椰奶",
        "amount": "200ml",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550989255-bfaeb9255c2f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i35_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "洋蔥切丁，雞胸肉切塊備用。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋將洋蔥炒軟後，加入綠咖哩醬炒香。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入雞肉拌炒至表面變色。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入椰奶小火燉煮10分鐘至雞肉熟透。",
        "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "36",
    "title": "莓果優格碗 (變奏版 3)",
    "description": "充滿抗氧化物的清爽早點，酸甜適中最適合喚醒慵懶的早晨。",
    "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop",
    "time": "5 分鐘",
    "tags": [
      "快速",
      "早餐",
      "健康",
      "素食"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i36_0",
        "name": "優格",
        "amount": "1 杯",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1584278858277-2e11e5fa0af6?w=150&auto=format&fit=crop"
      },
      {
        "id": "i36_1",
        "name": "藍莓",
        "amount": "半杯",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=150&auto=format&fit=crop"
      },
      {
        "id": "i36_2",
        "name": "燕麥",
        "amount": "少許",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將無糖優格倒入碗中作為基底。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "藍莓洗淨後瀝乾水分。",
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藍莓均勻鋪在優格上。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後撒上一層燕麥即可享用。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "37",
    "title": "韓式拌飯 (變奏版 3)",
    "description": "豐富的蔬菜與微辣的拌飯醬，營養均衡又美味。",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    "time": "35 分鐘",
    "tags": [
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "20 min prep",
    "ingredients": [
      {
        "id": "i37_0",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i37_1",
        "name": "雞蛋",
        "amount": "1 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i37_2",
        "name": "韓式辣醬",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1581451523490-b18c95a04eb0?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "菠菜川燙後瀝乾，加入少許麻油拌勻。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋煎一顆半熟蛋。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "碗中盛入白飯，擺上菠菜與煎蛋。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後加入一大匙韓式辣醬拌勻即可。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "38",
    "title": "蘑菇菠菜烘蛋 (變奏版 3)",
    "description": "豐富的蛋白質與蔬菜，適合週末早晨的悠閒時光。",
    "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "素食",
      "早餐",
      "高蛋白"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i38_0",
        "name": "蘑菇",
        "amount": "1 碗",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1511215456208-8e6f308feefa?w=150&auto=format&fit=crop"
      },
      {
        "id": "i38_1",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i38_2",
        "name": "雞蛋",
        "amount": "3 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i38_3",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "蘑菇切片，菠菜洗淨切段備用。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "雞蛋打入碗中加入少許鹽巴打勻。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋炒香大蒜，放入蘑菇與菠菜略炒。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入蛋液，小火烘至蛋液凝固即可。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "39",
    "title": "蒜香蒜片義大利麵 (變奏版 3)",
    "description": "最純粹的義式風味，只需要簡單的幾樣食材。",
    "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "快速",
      "素食",
      "晚餐"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i39_0",
        "name": "義大利麵",
        "amount": "1 把",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a1?w=150&auto=format&fit=crop"
      },
      {
        "id": "i39_1",
        "name": "大蒜",
        "amount": "5 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i39_2",
        "name": "橄欖油",
        "amount": "2 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "滾水中加入少許鹽巴，將義大利麵煮至8分熟。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      },
      {
        "text": "大蒜切片備用。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "冷油下蒜片，小火煸至蒜片呈金黃色後撈出。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "將麵條放入蒜油中拌炒，撒上酥脆蒜片即可。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "40",
    "title": "酪梨藜麥碗 (變奏版 4)",
    "description": "清爽健康的能量來源，充滿豐富的植物蛋白與優質脂肪。",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "純素",
      "健康",
      "低熱量"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i40_0",
        "name": "藜麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop"
      },
      {
        "id": "i40_1",
        "name": "酪梨",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&auto=format&fit=crop"
      },
      {
        "id": "i40_2",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i40_3",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將藜麥洗淨後，以1:1.5的水量煮熟放涼備用。",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop"
      },
      {
        "text": "酪梨對半切開，去籽後切成薄片或塊狀。",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄洗淨切丁。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藜麥鋪於碗底，依序擺上酪梨與番茄，淋上橄欖油即可。",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "41",
    "title": "義式烤番茄湯 (變奏版 4)",
    "description": "溫暖舒適的經典湯品，濃郁的番茄香氣搭配酥脆麵包，暖心又暖胃。",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    "time": "30 分鐘",
    "tags": [
      "蛋奶素",
      "健康",
      "晚餐",
      "低熱量",
      "快速"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i41_0",
        "name": "番茄",
        "amount": "3 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i41_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i41_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i41_3",
        "name": "麵包",
        "amount": "2 片",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將番茄對半切開，洋蔥切大塊，大蒜拍碎。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤盤，淋上橄欖油，以200度烤30分鐘至表面微焦。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將烤好的蔬菜放入果汁機打成濃湯，可加少許高湯調整濃稠度。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "搭配烤至酥脆的麵包片一起享用。",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "42",
    "title": "香煎鮭魚排 (變奏版 4)",
    "description": "富含Omega-3的美味主食，簡單調味就能帶出食材本身的鮮甜。",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
    "time": "20 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i42_0",
        "name": "鮭魚",
        "amount": "1 片",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=150&auto=format&fit=crop"
      },
      {
        "id": "i42_1",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i42_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "鮭魚洗淨擦乾水分，表面均勻抹上鹽巴與黑胡椒。",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋熱鍋，加入少許油，將鮭魚皮朝下放入。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "中火煎約4分鐘至表面金黃，翻面繼續煎約3分鐘。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      },
      {
        "text": "起鍋前加入大蒜與奶油稍微融化淋在魚肉上即可。",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "43",
    "title": "地中海烤雞胸 (變奏版 4)",
    "description": "經典地中海風味，多種香料醃製，肉質軟嫩多汁。",
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "高蛋白",
      "晚餐",
      "健康",
      "低熱量"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i43_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i43_1",
        "name": "大蒜",
        "amount": "3 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i43_2",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      },
      {
        "id": "i43_3",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "雞胸肉表面劃刀，加入蒜碎、橄欖油與香料醃製。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄切塊，與醃好的雞胸肉放上烤盤。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入烤箱以200度烤約20分鐘。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      },
      {
        "text": "確認中心熟透後即可出爐，淋上些許檸檬汁更提味。",
        "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "44",
    "title": "燕麥蛋白鬆餅 (變奏版 4)",
    "description": "完美的高蛋白早午餐選擇，不用擔心碳水超標。",
    "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "高蛋白",
      "早餐",
      "甜點",
      "快速"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i44_0",
        "name": "燕麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      },
      {
        "id": "i44_1",
        "name": "雞蛋",
        "amount": "2 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i44_2",
        "name": "鮮奶",
        "amount": "100ml",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將燕麥放入果汁機打成粉狀。",
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&auto=format&fit=crop"
      },
      {
        "text": "加入雞蛋、鮮奶均勻攪拌成麵糊。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋微微加熱，倒入適量麵糊。",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&auto=format&fit=crop"
      },
      {
        "text": "煎至表面起泡後翻面，再煎約1分鐘即可。",
        "image": "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "45",
    "title": "泰式綠咖哩雞 (變奏版 4)",
    "description": "濃郁椰香與香茅的完美融合，微辣的口感超級下飯。",
    "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop",
    "time": "40 分鐘",
    "tags": [
      "晚餐",
      "快速"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i45_0",
        "name": "雞胸肉",
        "amount": "200g",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=150&auto=format&fit=crop"
      },
      {
        "id": "i45_1",
        "name": "椰奶",
        "amount": "200ml",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1550989255-bfaeb9255c2f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i45_2",
        "name": "洋蔥",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "洋蔥切丁，雞胸肉切塊備用。",
        "image": "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋將洋蔥炒軟後，加入綠咖哩醬炒香。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "放入雞肉拌炒至表面變色。",
        "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入椰奶小火燉煮10分鐘至雞肉熟透。",
        "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "46",
    "title": "莓果優格碗 (變奏版 4)",
    "description": "充滿抗氧化物的清爽早點，酸甜適中最適合喚醒慵懶的早晨。",
    "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=800&auto=format&fit=crop",
    "time": "5 分鐘",
    "tags": [
      "快速",
      "早餐",
      "健康",
      "素食"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i46_0",
        "name": "優格",
        "amount": "1 杯",
        "category": "其他",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1584278858277-2e11e5fa0af6?w=150&auto=format&fit=crop"
      },
      {
        "id": "i46_1",
        "name": "藍莓",
        "amount": "半杯",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=150&auto=format&fit=crop"
      },
      {
        "id": "i46_2",
        "name": "燕麥",
        "amount": "少許",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將無糖優格倒入碗中作為基底。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "藍莓洗淨後瀝乾水分。",
        "image": "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藍莓均勻鋪在優格上。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後撒上一層燕麥即可享用。",
        "image": "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "47",
    "title": "韓式拌飯 (變奏版 4)",
    "description": "豐富的蔬菜與微辣的拌飯醬，營養均衡又美味。",
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    "time": "35 分鐘",
    "tags": [
      "晚餐",
      "健康",
      "快速"
    ],
    "prepTime": "20 min prep",
    "ingredients": [
      {
        "id": "i47_0",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i47_1",
        "name": "雞蛋",
        "amount": "1 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i47_2",
        "name": "韓式辣醬",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1581451523490-b18c95a04eb0?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "菠菜川燙後瀝乾，加入少許麻油拌勻。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "平底鍋煎一顆半熟蛋。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "碗中盛入白飯，擺上菠菜與煎蛋。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      },
      {
        "text": "最後加入一大匙韓式辣醬拌勻即可。",
        "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "48",
    "title": "蘑菇菠菜烘蛋 (變奏版 4)",
    "description": "豐富的蛋白質與蔬菜，適合週末早晨的悠閒時光。",
    "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=800&auto=format&fit=crop",
    "time": "25 分鐘",
    "tags": [
      "素食",
      "早餐",
      "高蛋白"
    ],
    "prepTime": "10 min prep",
    "ingredients": [
      {
        "id": "i48_0",
        "name": "蘑菇",
        "amount": "1 碗",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1511215456208-8e6f308feefa?w=150&auto=format&fit=crop"
      },
      {
        "id": "i48_1",
        "name": "菠菜",
        "amount": "1 把",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=150&auto=format&fit=crop"
      },
      {
        "id": "i48_2",
        "name": "雞蛋",
        "amount": "3 顆",
        "category": "蛋白質",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=150&auto=format&fit=crop"
      },
      {
        "id": "i48_3",
        "name": "大蒜",
        "amount": "2 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "蘑菇切片，菠菜洗淨切段備用。",
        "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop"
      },
      {
        "text": "雞蛋打入碗中加入少許鹽巴打勻。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      },
      {
        "text": "熱鍋炒香大蒜，放入蘑菇與菠菜略炒。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "倒入蛋液，小火烘至蛋液凝固即可。",
        "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "49",
    "title": "蒜香蒜片義大利麵 (變奏版 4)",
    "description": "最純粹的義式風味，只需要簡單的幾樣食材。",
    "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "快速",
      "素食",
      "晚餐"
    ],
    "prepTime": "5 min prep",
    "ingredients": [
      {
        "id": "i49_0",
        "name": "義大利麵",
        "amount": "1 把",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a1?w=150&auto=format&fit=crop"
      },
      {
        "id": "i49_1",
        "name": "大蒜",
        "amount": "5 瓣",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150&auto=format&fit=crop"
      },
      {
        "id": "i49_2",
        "name": "橄欖油",
        "amount": "2 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "滾水中加入少許鹽巴，將義大利麵煮至8分熟。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      },
      {
        "text": "大蒜切片備用。",
        "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
      },
      {
        "text": "冷油下蒜片，小火煸至蒜片呈金黃色後撈出。",
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop"
      },
      {
        "text": "將麵條放入蒜油中拌炒，撒上酥脆蒜片即可。",
        "image": "https://images.unsplash.com/photo-1626844131082-256783844137?w=400&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "50",
    "title": "酪梨藜麥碗 (變奏版 5)",
    "description": "清爽健康的能量來源，充滿豐富的植物蛋白與優質脂肪。",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    "time": "15 分鐘",
    "tags": [
      "純素",
      "健康",
      "低熱量",
      "快速"
    ],
    "prepTime": "15 min prep",
    "ingredients": [
      {
        "id": "i50_0",
        "name": "藜麥",
        "amount": "1 杯",
        "category": "主食",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop"
      },
      {
        "id": "i50_1",
        "name": "酪梨",
        "amount": "半顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150&auto=format&fit=crop"
      },
      {
        "id": "i50_2",
        "name": "番茄",
        "amount": "1 顆",
        "category": "生鮮蔬果",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1518977673343-5e6e3c155d8f?w=150&auto=format&fit=crop"
      },
      {
        "id": "i50_3",
        "name": "橄欖油",
        "amount": "1 大匙",
        "category": "調味料",
        "checked": false,
        "image": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=150&auto=format&fit=crop"
      }
    ],
    "steps": [
      {
        "text": "將藜麥洗淨後，以1:1.5的水量煮熟放涼備用。",
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop"
      },
      {
        "text": "酪梨對半切開，去籽後切成薄片或塊狀。",
        "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&auto=format&fit=crop"
      },
      {
        "text": "番茄洗淨切丁。",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop"
      },
      {
        "text": "將藜麥鋪於碗底，依序擺上酪梨與番茄，淋上橄欖油即可。",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop"
      }
    ]
  }
];
