# PackReady Landing Page

PackReady is a responsive marketing site for a Lagos-based packaging supplier. The app is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, and focuses on presenting the brand clearly, showing a product catalog, and collecting quote requests.

## What the site includes

- A hero section with brand positioning and primary calls to action
- A "Why Choose PackReady?" section with business stats and selling points
- A products grid rendered from local JSON data
- A contact section with a quote request form and WhatsApp shortcut
- A simple `POST /api/contact` route for handling submitted quote requests

## Tech stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Project structure

```text
app/
  api/contact/route.ts              Contact form API endpoint
  components/layout/                Navbar, footer, utility layout pieces
  components/sections/              Landing page sections
  globals.css                       Global styles and brand color tokens
  layout.tsx                        Root layout and metadata
  page.tsx                          Homepage composition
data/
  getProducts.ts                    Product data access helper
  products.json                     Product catalog seed data
public/                             Static assets
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## How the page is assembled

The homepage in `app/page.tsx` renders these sections in order:

1. `HeroSection`
2. `WhyUsSection`
3. `ProductsSection`
4. `ContactSection`

Navigation and footer are defined in `app/layout.tsx` through shared layout components.

## Product data

The product list currently comes from `data/products.json` through `data/getProducts.ts`.

This means:

- Product content is static by default
- `ProductsSection` is rendered on the server
- Replacing the local catalog with a real API or database only requires changing `getProducts()`

## Contact form behavior

The quote form in `app/components/sections/ContactSection.tsx` submits JSON to `app/api/contact/route.ts`.

Expected payload:

```json
{
  "name": "Fatai Adekunle",
  "phone": "08012345678",
  "business": "Mama Tunde Catering",
  "message": "200 packs of disposable plates and 100 takeaway containers"
}
```

Current API behavior:

- Validates `name`, `phone`, and `message`
- Returns `400` if required fields are missing
- Logs the request on the server
- Returns a success response without storing or forwarding the request

This route is still a stub. For production, wire it to one of the integrations already noted in the file:

- WhatsApp Business or Twilio
- Email delivery such as Resend or Nodemailer
- A database
- Google Sheets or another back-office workflow

## Branding and customization

Brand tokens live in `app/globals.css`:

- `--color-brand`
- `--color-brand-light`
- `--color-accent`
- `--color-dark`
- `--color-muted`

To adapt this site for another business, update:

- Metadata in `app/layout.tsx`
- Business copy in the section components
- Contact details in `ContactSection.tsx` and `Footer.tsx`
- Product records in `data/products.json`
- WhatsApp link in `ContactSection.tsx`

## Production notes

There are placeholder business details still present in the UI:

- Phone display: `+234 800 000 0000`
- Email: `hello@packready.ng`
- The WhatsApp CTA currently points to `https://wa.me/234869775830`

Before deployment, make sure those values match the real business contact channels.

## Linting

Run:

```bash
npm run lint
```

## Status

The landing page is functional for demo use. The main production gap is the contact workflow, which currently confirms submissions but does not persist or deliver them anywhere.

## Developer

Fatai Ayeloja (@fayeloja)

## AI Assistant

- Claude Code 4.0
- GitHub Copilot
- Antigravity
- Google Gemini

## Role played

I was responsible for the following:

- Developing the landing page in Next.js 16
- Creating the product catalog in JSON format
- Implementing the contact form with API route
- Designing the UI/UX with Tailwind CSS 4
- Ensuring mobile responsiveness
- Setting up the development environment

## How to contribute

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Fatai Ayeloja (@fayeloja)

