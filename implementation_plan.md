# Website Improvement Plan

## Goal Description
The goal is to professionalize the Qberri website structure (moving to a standard Vite setup) and update the content to strongly reflect the "Faster delivery using AI" value proposition.

## User Review Required
> [!IMPORTANT]
> I will be moving `main.js` and `style.css` from the root directory to `src/`, replacing the existing files there. This organizes the codebase but changes the file structure.

## Proposed Changes

### Structure & Cleanup
#### [MODIFY] [index.html](file:///c:/Users/Dell/Documents/Qberri/sources/WebsSite/qberri-website/index.html)
- Update script source to `src/main.js`
- Remove direct CSS link (let JS import it for Vite)
- Update code content for SEO and Value Prop

#### [MOVE] Root Assets to Source
- Move content of `main.js` (root) -> `src/main.js`
- Move content of `style.css` (root) -> `src/style.css`
- Delete root `main.js` and `style.css` after move

### Content Updates
**Hero Section**
- Headline: "Building Digital Solutions That Matter."
- Sub-headline: "Accelerated by AI. Delivered with Precision."
- CTA: "See Our Impact"

**Services Section**
- Update "Strategic Dev & QA" to "High-Velocity Engineering"
- Update "Intelligent Automation" to "AI-Driven Solutions"

**About Section (Essence)**
- **[NO CHANGE]** Vision: "Democratizing technology through AI-powered automation that amplifies human potential and unlocks boundless opportunities."
- **[NO CHANGE]** Mission/Essence text: Preserve the existing description of Qberri as a collective of elite professionals.

**[NEW] Technology Section**
- **Location**: Between "Services" and "About"
- **Design**: clean grid with hover effects, matching the glassmorphism style.
- **Categories**:
    - **Core Stack**: Java, Spring Boot, MongoDB, Python, Node.js, React, HTML5, CSS3
    - **Cloud & DevOps**: AWS, GCP, Atlassian
    - **Next-Gen AI**: OpenAI, Anthropic, GitHub Copilot, n8n, Antigravity
- **Implementation**:
    - Use `devicon` CDN for standard icons.
    - Use custom SVGs/text for newer AI tools if icons are missing (e.g., Antigravity).

### [NEW] UX/UI Refinement (Trust & Modernity)
- **Visual Language**: Adopt a "fintech/enterprise SaaS" aesthetic—clean, authoritative, but innovative.
- **Typography**: Use *Inter* or *Outfit* with tighter tracking for headings to feel more premium.
- **Components**:
    - **Buttons**: Subtle gradients, distinct hover states (lift + glow).
    - **Cards**: "Glassmorphism" with very subtle borders (1px solid rgba(255,255,255,0.1)) to avoid "cheap" feeling.
    - **Scroll**: Smooth scroll behaviors and scroll-triggered fade-ins for all sections.
- **Trust Signals**:
    - Add a "Trusted By" placeholder section (logos in grayscale/opacity).
    - Add a "Why Qberri?" micro-section with icons emphasizing: Speed, Precision, ROI.

### SEO & Technical
- Add Open Graph tags (OG:Title, OG:Description, OG:Image)
- Add stronger keywords for "AI software development", "Sri Lanka tech partner"

## Verification Plan

### Automated Tests
- Run `npm run dev` to ensure Vite picks up the new structure.
- Browser test: Check console for errors.

### Manual Verification
- Open the local server URL.
- Verify the Hero section text matches the new copy.
- Click "Get in Touch" to verify the modal still works (JS logic check).
- Check responsiveness on mobile view using browser dev tools.
