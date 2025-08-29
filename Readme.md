# Razorpay Payment Gateway Test

A simple Node.js application to test Razorpay payment integration with a minimal frontend interface.

## Features

- Express.js server with Razorpay integration
- Simple HTML frontend for testing payments
- ₹1 test payment functionality
- CORS enabled for cross-origin requests
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- npm
- Razorpay account (test mode)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rzp-key-test
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=5000
```

## Configuration

### Razorpay Setup

1. Sign up for a Razorpay account at [https://razorpay.com](https://razorpay.com)
2. Navigate to the Dashboard
3. Go to Settings → API Keys
4. Generate test API keys
5. Copy the Key ID and Key Secret to your `.env` file

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

3. Click the "Pay ₹1" button to test the payment flow

## Project Structure

```
rzp-key-test/
├── .env                 # Environment variables (not tracked)
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies and scripts
├── server.js           # Express server with Razorpay integration
├── public/
│   └── index.html      # Frontend payment interface
└── README.md           # This file
```

## API Endpoints

### POST /create-order

Creates a new Razorpay order for ₹1.

**Response:**
```json
{
  "success": true,
  "key": "rzp_test_...",
  "order": {
    "id": "order_...",
    "amount": 100,
    "currency": "INR",
    "receipt": "rcpt_..."
  }
}
```

## Testing

This application uses Razorpay's test mode. In test mode:
- No real money is charged
- Use test card numbers provided by Razorpay
- All transactions are simulated

### Test Card Numbers

- **Success:** 4111 1111 1111 1111
- **Failure:** 4000 0000 0000 0002

Use any future date for expiry and any 3-digit CVV.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RAZORPAY_KEY_ID` | Your Razorpay Key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Your Razorpay Key Secret | Yes |
| `PORT` | Server port (default: 5000) | No |

## Security Notes

- Never commit your `.env` file to version control
- Use test keys for development
- Switch to live keys only in production
- Implement proper error handling and validation in production

## Dependencies

- **express**: Web framework
- **razorpay**: Official Razorpay SDK
- **dotenv**: Environment variable management
- **cors**: Cross-origin resource sharing

## License

ISC

## Support

For Razorpay-specific issues, refer to the [official documentation](https://razorpay.com/docs/).