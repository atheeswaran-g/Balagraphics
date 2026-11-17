BALA GRAPHICS — FULL WEBSITE + PHOTOGRAPHY BOOKING EMAIL NOTIFICATIONS

Pages:
- index.html        : Home
- creations.html    : Our Creations
- photography.html  : Pre-Wedding & Wedding Photography Services
- booking.html      : Client Booking Request Form
- bookings.html     : Booking Dashboard / CSV tools (if enabled in this project)
- designs.html      : Design Marketplace
- reviews.html      : Customer Reviews
- contact.html      : Contact
- collections.html  : Premium Collections

BOOKING FORM FIELDS:
- Client name, mobile number, optional email
- Shoot type and preferred event date
- Wedding venue type (Temple / Mahal / Home / Other)
- Wedding venue name or location
- Reception venue type (Temple / Mahal / Home / Other)
- Reception venue name or location
- Additional details

REMOVED FIELDS:
- Package preference
- Approximate guest count

EMAIL NOTIFICATIONS:
The booking form sends a booking request using EmailJS. The EmailJS Browser SDK is loaded
before js/script.js in the HTML pages. The project is configured with the EmailJS public key,
service ID and template ID currently present in js/script.js.

Your EmailJS template must contain these variables (exact spelling):
{{business_name}}
{{client_name}}
{{client_phone}}
{{client_email}}
{{shoot_type}}
{{event_date}}
{{wedding_venue_type}}
{{wedding_venue_name}}
{{reception_venue_type}}
{{reception_venue_name}}
{{additional_details}}

The EmailJS template's recipient email address must be set in your EmailJS dashboard.
A successful local code check cannot guarantee email delivery: submit a test booking on the
hosted/Live Server site and confirm that the email arrives. Keep the EmailJS public key public
as designed by EmailJS, but never put private email account passwords or secret keys in code.

RUN:
1. Extract the ZIP and keep all folders together.
2. Open the bala_graphics_professional folder in VS Code.
3. Open index.html with Live Server.
4. Open the Book a Shoot page and submit a test booking.

NOTES:
- Images included are sample artwork; replace them with your approved images when ready.
- Any local browser dashboard/storage is limited to that browser/device unless a backend is
  configured. EmailJS sends notification emails; it is not a central booking database.


BOOKING FORM VENUE FIELDS
Select Temple to enter temple name; Home to enter village or town only; Mahal to enter mahal name and place. Wedding and reception venue fields work independently. EmailJS template should include wedding_venue_place and reception_venue_place in addition to existing venue variables.
