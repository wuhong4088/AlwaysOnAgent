import fs from 'fs';
const checkList = [
  '1524593166156-312f362cada5', // tomato?
  '1592437699114-1e0bc39e1a89', // tomato?
  '1586201375761-83865001e31c', 
  '1550583724-b2692b85b150', // milk?
  '1511215456208-8e6f308feefa', // mushrooms?
  '1621280387586-35dbcc928173', // omelette?
  '1572453800995-8f2df53be247', // cooking pan?
  '1621996346565-e3dbc646d9a1', // pasta?
  '1584278858277-2e11e5fa0af6', // yogurt?
  '1590301157890-4810ed35a4d7', // gochujang?
];
async function check() {
  for (const id of checkList) {
    try {
      const url = `https://images.unsplash.com/photo-${id}?w=400&auto=format&fit=crop`;
      const res = await fetch(url, { method: 'HEAD' });
      console.log(res.status, id);
    } catch(e) {}
  }
}
check();
