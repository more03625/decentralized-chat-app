🚀 Decentralized P2P Chat Application
---

# 🔗 P2P Chat with Hyperswarm

A **decentralized, peer-to-peer (P2P) chat application** built using **Hyperswarm**. No central server—just direct connections between peers! 🚀

## ✨ Features
✅ Fully **serverless** & **decentralized** chat  
✅ Uses **Hyperswarm** for peer discovery  
✅ Communicates using **sockets** over a **DHT**  
✅ Secure topic-based chat rooms (via **SHA-256 hashed topics**)  
✅ Works in multiple terminals  

---

## 🛠 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/decentralized-chat-app.git
cd decentralized-chat-app
```

### **2️⃣ 🔧 Setup Environment Variables**
```sh
1. Create a `.env` file in the project root.
2. Add all the variables from .env.example to .env file.
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Run the Chat App**
Open **two or more terminals** and run:
```sh
node chat.js
```

Now, start chatting across terminals! 🎉

---

## 📝 How It Works
1️⃣ **Peers join a common topic** (`p2p-chat-room` hashed via `SHA-256`).  
2️⃣ **Hyperswarm discovers peers** in the network.  
3️⃣ **Direct peer-to-peer connections** are established.  
4️⃣ **Messages are sent and received** over the socket.  
5️⃣ **No servers required—just pure P2P communication!**  

---

## 🏗 Tech Stack
- **Hyperswarm** → P2P networking  
- **HyperDHT** → Decentralized peer discovery  
- **Node.js** → Serverless runtime  
- **Readline** → Handles user input  

---

## 🖥 Example Chat
```sh
💬 Type a message: Hello, anyone there?
📩 New peer connected!
📩 Peer: Hey! I can see your message!
```

---

## 🎯 Future Enhancements
- 🔒 **Encryption** for secure messaging  
- 🌍 **Multi-room support** (multiple chat topics)  
- 💾 **Persistent chat history**  


🚀 **Start chatting now! No servers, no limits—just pure P2P magic!** 🔗✨  