# Ethereum Address Explorer

A modern, responsive web application for exploring Ethereum wallet portfolios. Built with Next.js, TypeScript, and Tailwind CSS, this tool allows users to analyze token holdings, track portfolio values, and view detailed token information for any Ethereum address.

## 🚀 Features

- **Portfolio Analysis**: View complete token holdings for any Ethereum address
- **Real-time Pricing**: Live USD values powered by CoinGecko API
- **Token Details**: Comprehensive token information including logos, symbols, and metadata
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Parallel API calls and intelligent caching
- **Error Handling**: Robust error boundaries and user-friendly error messages
- **Accessibility**: WCAG compliant components and keyboard navigation
- **Form Validation**: Real-time validation using react-hook-form

## 🛠️ Tech Stack

- **Framework**: Next.js 12.3.1 with React 18
- **Language**: TypeScript 4.8.4
- **Styling**: Tailwind CSS 3.1.8 with custom design system
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with real-time validation
- **Blockchain**: Ethers.js 5.7.2 and Alchemy SDK 2.4.2
- **UI Components**: Headless UI and Heroicons
- **Development**: ESLint, Husky, Lint-staged, Storybook
- **Deployment**: Vercel-ready with API routes

## 🏗️ Architecture

### Frontend
- **Next.js App Router**: Server-side rendering and API routes
- **Component Library**: Storybook-driven design system
- **Responsive Tables**: Mobile-optimized data display
- **Error Boundaries**: Graceful error handling and recovery

### Backend
- **API Routes**: Secure server-side data fetching
- **Alchemy Integration**: Ethereum blockchain data access
- **CoinGecko API**: Real-time cryptocurrency pricing
- **Caching Strategy**: 30-minute cache with stale-while-revalidate

### Performance Optimizations
- **Parallel API Calls**: Simultaneous blockchain and pricing data fetching
- **Background Refetching**: Automatic data updates without user interaction
- **Layout Shift Prevention**: Reserved space for loading states
- **Image Optimization**: SVG support with security policies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager
- Alchemy API key (for blockchain data)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ethereum-address-explorer

# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
# Add your ALCHEMY_API_KEY to .env.local

# Start development server
yarn dev
```

### Available Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn lint-fix     # Fix linting issues
yarn type-check   # TypeScript type checking
yarn test-all     # Run all checks

# Storybook
yarn storybook    # Start Storybook
yarn build-storybook # Build Storybook
```

## 📱 Usage

1. **Enter Ethereum Address**: Input any valid Ethereum wallet address
2. **View Portfolio**: See all token holdings with real-time USD values
3. **Token Details**: Explore individual token information and metadata
4. **Responsive Design**: Access from any device with optimized mobile experience

## 🔧 Configuration

### Environment Variables
```bash
ALCHEMY_API_KEY=your_alchemy_api_key_here
```

### API Endpoints
- `GET /api/portfolio/[addresses]` - Fetch portfolio data for Ethereum addresses

## 🎨 Design System

Built with a comprehensive design system featuring:
- **Custom Color Palette**: Storm Gray, Fiord, Blue Ribbon, and semantic colors
- **Typography**: Inter font family with multiple weights
- **Component Library**: Reusable UI components with Storybook documentation
- **Responsive Breakpoints**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 AA compliance

## 🚧 Development Roadmap

### Current TODOs
- [ ] Upgrade Next.js to v13.x
- [ ] Implement skeleton UI to prevent layout shift
- [ ] Add pagination for large token lists
- [ ] Create favicon and Open Graph images
- [ ] Enhance error handling and user feedback

### Performance Features (Implemented)
- ✅ Responsive table design
- ✅ Parallelized API calls for optimal performance
- ✅ Server-side API key protection
- ✅ Storybook component library
- ✅ Error boundary implementation
- ✅ Accessibility compliance
- ✅ React Query caching and background updates
- ✅ Layout shift prevention
- ✅ Form validation with react-hook-form

### Future Enhancements
- [ ] Multi-chain support (Polygon, BSC, etc.)
- [ ] Historical portfolio tracking
- [ ] Export functionality (CSV, PDF)
- [ ] Advanced filtering and sorting
- [ ] Portfolio analytics and insights
- [ ] Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Original Task**: [GitHub Gist](https://gist.github.com/0xAsimetriq/36d23603807ecf03be1387ebaf2e7692)
- **Live Demo**: [Deployed Application](https://your-deployment-url.com)
- **Storybook**: [Component Library](https://your-storybook-url.com)

## 🏷️ Keywords

Ethereum, blockchain, portfolio, cryptocurrency, wallet, token, DeFi, Web3, Next.js, TypeScript, React, Tailwind CSS, Alchemy, CoinGecko, API, responsive design, accessibility