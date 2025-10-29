export default function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Παράδειγμα χρήσης:
delay(3000).then(() => alert('Εκτελείται μετά από 3 δευτερόλεπτα'));
