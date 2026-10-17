The new Shield Global site is built in React (Vite + React Router). Every page builds and renders without errors. I checked it in screenshots at 1440px desktop and 390px mobile, and no page scrolls sideways on mobile.

To run it: npm install, then npm run dev. npm run build produces the deployable files in dist/.

Pages: Home, About, Services, HSE & Quality, Careers and Contact. The "Request a Quotation" button opens a panel from the right, with the service pre-selected when it's opened from a specific service.

Design

Warm off-white background, dark ink text, and the brand blue (#0f4ba1) as the only accent colour. Headings use a serif (Source Serif 4), body text uses IBM Plex Sans, and small labels use a typewriter-style font (IBM Plex Mono). The idea is a technical document: thin dividing lines, numbered lists, labels like "Ref-01".
Each section has its own layout. For example:
The home hero has the headline above a large photo, with a numbered list of the 7 divisions beside it.
The 5 core pillars are a list next to an image that changes as you pick a pillar.
The Services page has a side menu that highlights the section you're reading.
Motion is only in sections and cards: content fades and rises as you scroll, images reveal from top to bottom, and cards get a blue line and slow image zoom on hover. Buttons only change colour or underline. It all switches off for visitors who've set their device to reduce motion.
Mobile is designed separately, not just stacked:
The menu is full-screen, with large type.
The pillars become an accordion.
The industries become a sideways-swiping row.
The Services side menu becomes a bar of tabs that stays at the top.
Photos run edge to edge.
Choices I made to avoid placeholder or made-up content

Phone numbers are left out. Both are dummy numbers, so the site shows only the email address and opening hours.
No Projects page. All three projects share the same filler text and may not be real.
Industries is a section on the home page, not its own page. The three sectors had identical descriptions, so that text appears once. The industries intro and that shared description are merged into one paragraph, with a few joining words added.
The "About Our Leadership" button is gone, because the About page names no leaders.
The logo is a simple shield-and-text design based on the blue logo, since it's unclear which of the two logos is official.
The forms now open the visitor's email app with their details filled in and addressed to info@shieldglobaltech.ae. On the old site the forms silently lost every submission. The message shown after submitting is new wording, because the old "your request has been logged" message would no longer be true. Careers "Apply Now" links work the same way, with the job title as the subject.
Images are copied into the project (public/images/) instead of loading from the old site. The Technical Support division has no photo, because the old site reused the Building Construction one there.
Questions for the client:

the real phone numbers
an address
which logo is official
real project photos (several current images look like stock or AI-generated)
whether the job openings are current
Once there's a server to receive the forms, the email-app step can be swapped out in one file: src/components/InquiryForm.jsx.