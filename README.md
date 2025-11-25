# Gemini Clone

A React-based clone of Google's Gemini AI chat interface, featuring a clean UI with sidebar navigation and real-time AI responses.

## Features

- **Interactive Chat Interface**: Clean and intuitive chat UI similar to Gemini
- **Sidebar Navigation**: Collapsible sidebar with recent chat history
- **Real-time Responses**: Animated typing effect for AI responses
- **Chat History**: Keep track of previous prompts and reload them
- **New Chat**: Start fresh conversations with a single click
- **Responsive Design**: Works seamlessly across different screen sizes

## Project Structure

```
gemini-clone/
├── node_modules/
├── public/
├── src/
│   ├── assets/           # Images and icons
│   ├── components/
│   │   ├── Main/         # Main chat interface
│   │   │   ├── Main.jsx
│   │   │   ├── Main.css
│   │   │   └── Main.jsx
│   │   └── Sidebar/      # Sidebar component
│   │       ├── Sidebar.jsx
│   │       ├── Sidebar.css
│   │       └── Sidebar.jsx
│   ├── context/          # React Context for state management
│   │   ├── Context.jsx
│   │   └── App.jsx
│   ├── config/
│   │   └── gemini.js     # Gemini API configuration
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                  # Environment variables
├── .gitignore
├── demoREAD.txt
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gemini-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Start a conversation**: Type your prompt in the input box and press Enter or click the send icon
- **View history**: Click the menu icon to expand the sidebar and see recent prompts
- **Load previous chat**: Click on any recent prompt to reload that conversation
- **Start new chat**: Click the "new Chat" button in the sidebar

## Key Components

### Context Provider
Manages global state including:
- Current input and prompt
- Chat history
- Loading states
- AI response data

### Main Component
The primary chat interface featuring:
- Welcome screen with suggested prompts
- Chat display area
- Input box with send functionality
- Loading animations

### Sidebar Component
Navigation panel with:
- Collapsible menu
- Recent prompts list
- Quick action buttons (Help, Activity, Settings)

## Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and dev server
- **Google Gemini AI**: AI response generation
- **Context API**: State management
- **CSS**: Styling

## API Integration

The app uses Google's Gemini AI API through the `config/gemini.js` file. Responses are formatted with:
- Bold text for emphasis (using `**text**` markers)
- Line breaks for better readability
- Animated typing effect for engaging UX

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file with the following variables:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by Google's Gemini AI interface
- Built with React and Vite for optimal performance

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This is a clone project for educational purposes. Make sure to comply with Google's API terms of service when using the Gemini API.