/**
 * Contact details.
 *
 * Every `value: null` below is UNCONFIRMED and renders as a visible
 * "awaiting confirmation" state. Do not guess an address, a map pin or a
 * phone number — fill these in only from details the committee provides.
 */

export const contactDetails = [
  {
    /**
     * Supplied by the mandal. The pin marks Galiakot Wala Road itself, not a
     * building number — the address line says exactly that rather than
     * implying a precision the pin does not have.
     */
    id: "venue",
    label: "Utsav Venue",
    value: "Galiakot Wala Rd, Chembur, Mumbai, Maharashtra 400074",
    href: "https://maps.app.goo.gl/QVS6xhtAVwXkeSpeA",
    external: true,
  },
  {
    id: "phone",
    label: "Telephone",
    value: null,
    awaiting: "An official contact number has not yet been supplied.",
  },
  {
    id: "email",
    label: "Email",
    value: "gkutsav.1958@gmail.com",
    href: "mailto:gkutsav.1958@gmail.com",
  },
  {
    id: "social",
    label: "Social",
    value: "@gk_utsav1958",
    href: "https://www.instagram.com/gk_utsav1958/",
    external: true,
  },
];

/**
 * The venue map, as supplied by the mandal. `link` is the short Google Maps
 * URL for "open in the app / get directions"; `src` is the embed iframe.
 */
export const mapEmbed = {
  enabled: true,
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5235325628028!2d72.89325287547473!3d19.0407060530791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ab212bd847%3A0x464299a44fa5ada0!2sGaliakot%20Wala%20Rd%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400074!5e0!3m2!1sen!2sin!4v1792316178798!5m2!1sen!2sin",
  link: "https://maps.app.goo.gl/QVS6xhtAVwXkeSpeA",
  label: "Galiakot Wala Rd, Chembur, Mumbai, Maharashtra 400074",
};
