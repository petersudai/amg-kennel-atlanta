const u = (id: string, w: number, q = 80) =>
  `https://images.unsplash.com/${id}?q=${q}&w=${w}&auto=format&fit=crop`;

export const img = {
  hero: u("photo-1583987303344-1f553edc7f11", 1600),
  heroMobile: u("photo-1583987303344-1f553edc7f11", 900),
  story: u("photo-1611173622933-91942d394b04", 1200),
  scissors: u("photo-1719464454959-9cf304ef4774", 1000),
  colorStyle: u("photo-1674833442464-1a9acfa9fa11", 1000),
  calmCare: u("photo-1609011744915-85acb5dfdbb3", 1000),
  boutique: u("photo-1780400949517-36f4f003e73c", 1000),
  puppyFirst: u("photo-1610389712622-73f621ff06bf", 1000),
  shopCollars: u("photo-1627341660958-60bf64175d98", 900),
  shopTreats: u("photo-1568640347023-a616a30bc3bd", 900),
  shopToys: u("photo-1535294435445-d7249524ef2e", 900),
  shopBandanas: u("photo-1709771818873-57feeea88f41", 900),
  visitPortrait: u("photo-1614261812340-5ee9a3ed33a3", 1200),
  ctaGlow: u("photo-1757553532955-38d5d1c735d2", 1000),
  gallery: [
    u("photo-1625277743460-43716b93507a", 900),
    u("photo-1674833442464-1a9acfa9fa11", 900),
    u("photo-1719464454959-9cf304ef4774", 900),
    u("photo-1611173622933-91942d394b04", 900),
    u("photo-1610389712622-73f621ff06bf", 900),
    u("photo-1635587765264-8d77ebb55c5d", 900),
    u("photo-1560807707-8cc77767d783", 900),
    u("photo-1583987303344-1f553edc7f11", 900),
    u("photo-1614261812340-5ee9a3ed33a3", 900),
    u("photo-1546527868-ccb7ee7dfa6a", 900),
  ],
  avatars: [
    u("photo-1526440847959-4e38e7f00b04", 160),
    u("photo-1609849538514-be556d1d8e10", 160),
    u("photo-1547482354-89d4259dbc4b", 160),
  ],
};
