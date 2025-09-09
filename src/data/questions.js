export const questions =
[
  {
    "section": "Cryptography - RSA Signatures",
    "question": "Why is the RSA-PSS signature scheme preferred over basic RSA signatures?",
    "options": [
      "It uses smaller keys",
      "It adds probabilistic padding for enhanced security",
      "It avoids modular exponentiation",
      "It is deterministic"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "How does SHA-3 differ from SHA-2 in its design?",
    "options": [
      "SHA-3 uses a Feistel network, SHA-2 uses a sponge construction",
      "SHA-3 uses a sponge construction, SHA-2 uses a Merkle-Damgård structure",
      "SHA-3 is less secure than SHA-2",
      "SHA-3 requires a larger key"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "Why is SHA-3's variable output length advantageous for cryptographic applications?",
    "options": [
      "It reduces security for flexibility",
      "It allows tailored hash sizes for specific use cases",
      "It eliminates the need for padding",
      "It simplifies key generation"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "How does SHA-3's capacity parameter affect its security against collision attacks?",
    "options": [
      "Higher capacity reduces output size; decreases security",
      "Higher capacity increases resistance to collision attacks; reduces performance",
      "Capacity has no impact on collisions",
      "Lower capacity enhances security; improves performance"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "Why is XTS-AES mode specifically designed for block-oriented storage devices?",
    "options": [
      "It uses stream-based encryption",
      "It provides data confidentiality with sector-specific tweaks",
      "It requires no key expansion",
      "It is faster than CBC mode"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Ciphers",
    "question": "Why is the DES S-box design resistant to differential cryptanalysis, and what subtle flaw still exists?",
    "options": [
      "It uses linear mappings; vulnerable to linear cryptanalysis",
      "It employs non-linear mappings with specific difference distribution tables; vulnerable to linear cryptanalysis",
      "It avoids substitution; susceptible to brute-force attacks",
      "It uses fixed permutations; vulnerable to key recovery"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "How does SHA-3's sponge construction mitigate length extension attacks compared to SHA-2's Merkle-Damgård structure?",
    "options": [
      "SHA-3 avoids padding; SHA-2 requires it",
      "SHA-3's capacity absorbs internal state, preventing extension; SHA-2's state is exposed",
      "SHA-3 uses smaller outputs; SHA-2 uses larger",
      "SHA-3 is deterministic; SHA-2 is probabilistic"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Elliptic Curve Cryptography",
    "question": "In elliptic curve cryptography, why does the point multiplication operation provide strong security?",
    "options": [
      "It is reversible with simple arithmetic",
      "It relies on the elliptic curve discrete logarithm problem, which is computationally hard",
      "It avoids modular arithmetic",
      "It simplifies key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "Evaluate the security implications of IPsec's use of IKEv2 versus IKEv1 in modern networks.",
    "options": [
      "IKEv1 is more secure; supports quantum resistance",
      "IKEv2 improves efficiency and security with better authentication and key management",
      "IKEv2 avoids key exchange; IKEv1 is more flexible",
      "IKEv1 supports modern ciphers; IKEv2 is outdated"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - TLS",
    "question": "Evaluate the impact of TLS 1.3's zero round-trip time (0-RTT) feature on security versus performance.",
    "options": [
      "0-RTT enhances security; reduces performance",
      "0-RTT improves performance; vulnerable to replay attacks without additional protections",
      "0-RTT eliminates key exchange; increases security",
      "0-RTT simplifies encryption; no trade-offs"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "Why is the choice of an irreducible polynomial critical in GF(2^8) for AES, and what happens if a reducible polynomial is used?",
    "options": [
      "It simplifies arithmetic; reducible polynomials maintain security",
      "It defines field operations; reducible polynomials allow factorization, breaking security",
      "It reduces key size; reducible polynomials are more efficient",
      "It ensures reversibility; reducible polynomials simplify decryption"
    ],
    "answer": 1
  },
  {
    "section": "Email Security",
    "question": "Why is DomainKeys Identified Mail (DKIM) insufficient for end-to-end email security compared to PGP?",
    "options": [
      "DKIM encrypts the email content",
      "DKIM verifies the sender's domain, not the message content or recipient",
      "DKIM requires no signatures",
      "DKIM is more secure than PGP"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - PRNG",
    "question": "Why is a block cipher-based PRNG in CTR mode more secure than a linear feedback shift register (LFSR), and what subtle flaw persists?",
    "options": [
      "LFSR is more random; CTR is predictable",
      "CTR leverages block cipher security; counter reuse can leak keystream",
      "CTR avoids seeds; LFSR requires them",
      "LFSR is faster; CTR is less secure"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "Evaluate the advantage of Kerberos over remote user authentication using asymmetric encryption.",
    "options": [
      "Kerberos is less secure but faster",
      "Kerberos requires no trusted third party",
      "Kerberos uses symmetric encryption for efficiency in trusted environments",
      "Kerberos supports elliptic curve cryptography"
    ],
    "answer": 2
  },
  {
    "section": "Network Security - Authentication",
    "question": "Why is EAP-TLS's mutual authentication critical for IEEE 802.1X, and what subtle flaw persists in misconfigured implementations?",
    "options": [
      "Mutual authentication simplifies key exchange; no flaws exist",
      "Mutual authentication ensures client-server trust; misconfigured certificates enable impersonation",
      "Mutual authentication avoids certificates; vulnerable to brute-force attacks",
      "Mutual authentication reduces security; vulnerable to key recovery"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hybrid Encryption",
    "question": "Evaluate the role of the Elliptic Curve Integrated Encryption Scheme (ECIES) in combining encryption and key exchange.",
    "options": [
      "ECIES avoids key exchange; simplifies encryption",
      "ECIES integrates Diffie-Hellman key exchange with symmetric encryption for efficiency",
      "ECIES uses RSA for key exchange; reduces security",
      "ECIES eliminates encryption; focuses on authentication"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Key Exchange",
    "question": "Why is the Diffie-Hellman key exchange's use of a safe prime critical for security?",
    "options": [
      "It simplifies exponentiation; reduces security",
      "It ensures a large subgroup, preventing small subgroup attacks",
      "It eliminates the need for a generator",
      "It reduces key size; enhances efficiency"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "Synthesize the role of finite field arithmetic in AES's S-box design.",
    "options": [
      "It simplifies key generation",
      "It enables non-linear byte substitution using GF(2^8) operations",
      "It reduces the number of rounds",
      "It eliminates diffusion"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does Fermat's Little Theorem ensure the correctness of RSA's encryption and decryption process?",
    "options": [
      "It generates prime numbers for the modulus",
      "It guarantees modular exponentiation returns the original message",
      "It simplifies discrete logarithm computation",
      "It ensures collision resistance in signature"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "Why is the Extensible Authentication Protocol (EAP) flexible for network access control?",
    "options": [
      "It uses a single authentication method",
      "It supports multiple authentication protocols within a framework",
      "It requires no certificates",
      "It is incompatible with 802.1X"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "How does the AES key expansion process ensure security?",
    "options": [
      "It compresses the key to reduce size",
      "It generates unique round keys from the original key",
      "It encrypts the key with a hash function",
      "It uses a single key for all rounds"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "Synthesize the advantage of XTS-AES mode over CBC for disk encryption, considering sector-level operations.",
    "options": [
      "XTS-AES uses smaller block sizes",
      "XTS-AES applies sector-specific tweaks, preventing block reordering attacks",
      "XTS-AES eliminates the need for an IV",
      "XTS-AES is less secure but faster"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does Euler's Theorem ensure the correctness of RSA's modular exponentiation, and what subtle condition must be met?",
    "options": [
      "It generates prime numbers; modulus must be composite",
      "It guarantees message recovery; public and private exponents must be inverses modulo φ(n)",
      "It simplifies key exchange; no conditions apply",
      "It ensures collision resistance; modulus must be prime"
    ],
    "answer": 1
  },
  {
    "section": "Wireless Security",
    "question": "How does IEEE 802.11i (WPA2) improve security over WEP for wireless networks?",
    "options": [
      "WEP uses stronger encryption",
      "WPA2 uses AES and robust key management, unlike WEP's weak RC4",
      "WPA2 avoids authentication",
      "WPA2 requires no key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - TLS",
    "question": "Evaluate the security trade-offs of TLS 1.3's removal of RSA key exchange compared to TLS 1.2.",
    "options": [
      "TLS 1.3 is less secure; RSA is robust",
      "TLS 1.3 enhances forward secrecy by using ephemeral keys; RSA lacks forward secrecy",
      "TLS 1.3 avoids key exchange; TLS 1.2 requires it",
      "TLS 1.3 simplifies encryption; TLS 1.2 is more complex"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Quantum Computing",
    "question": "Synthesize the impact of quantum algorithms like Grover's on the security of symmetric ciphers like AES.",
    "options": [
      "Grover's algorithm has no impact; AES is quantum-resistant",
      "Grover's algorithm halves the effective key length; AES-256 remains secure",
      "Grover's algorithm breaks AES entirely; no mitigation exists",
      "Grover's algorithm simplifies key exchange; enhances security"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "What distinguishes IEEE 802.1X from the Extensible Authentication Protocol (EAP)?",
    "options": [
      "802.1X is a cryptographic algorithm, EAP is a framework",
      "802.1X is a port-based access control, EAP is an authentication framework",
      "802.1X is less secure than EAP",
      "802.1X does not support wireless networks"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "Why is the Miller-Rabin algorithm used in primality testing for RSA?",
    "options": [
      "It generates random numbers",
      "It efficiently determines if a number is likely prime",
      "It computes discrete logarithms",
      "It ensures collision resistance"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - PRNG",
    "question": "Synthesize the security implications of using a block cipher in counter mode for pseudorandom number generation versus a dedicated PRNG like Blum-Blum-Shub.",
    "options": [
      "Block ciphers are less secure; Blum-Blum-Shub is faster",
      "Block ciphers offer strong security with proper keys; Blum-Blum-Shub is slower but mathematically robust",
      "Block ciphers avoid seeds; Blum-Blum-Shub requires them",
      "Both are equally predictable; block ciphers are slower"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Finite Fields",
    "question": "In modular arithmetic, what is the significance of the modulus in GF(p)?",
    "options": [
      "It defines the block size",
      "It specifies the prime number for the finite field",
      "It determines the key length",
      "It sets the polynomial degree"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Public Key",
    "question": "How does the discrete logarithm problem underpin the security of the Elgamal cryptosystem?",
    "options": [
      "It ensures reversible encryption",
      "Its computational difficulty protects the private key",
      "It simplifies key exchange",
      "It replaces modular exponentiation"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Algorithms",
    "question": "Synthesize the impact of the Euclidean Algorithm on cryptographic systems.",
    "options": [
      "It directly encrypts data",
      "It enables key generation through GCD and modular inverses",
      "It compresses ciphertext",
      "It generates hash functions"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Digital Signatures",
    "question": "How does the Schnorr signature scheme's use of a challenge-response mechanism enhance efficiency over ECDSA?",
    "options": [
      "It increases signature size; reduces verification time",
      "It reduces exponentiations via a linear challenge; ECDSA requires more computations",
      "It avoids elliptic curves; simplifies verification",
      "It uses larger keys; enhances security"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Blockchain",
    "question": "Evaluate the role of the Schnorr signature scheme in blockchain applications compared to ECDSA.",
    "options": [
      "Schnorr is less secure but faster",
      "Schnorr enables signature aggregation, reducing blockchain size",
      "Schnorr avoids elliptic curves",
      "Schnorr requires larger signature"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does Fermat's Little Theorem support RSA encryption?",
    "options": [
      "It generates random numbers",
      "It ensures modular exponentiation properties for key generation",
      "It computes discrete logarithms",
      "It defines elliptic curves"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Encryption Modes",
    "question": "Synthesize the role of authenticated encryption modes like GCM in modern cryptography.",
    "options": [
      "They compress data for efficiency",
      "They provide both confidentiality and authenticity in a single operation",
      "They replace digital signatures",
      "They eliminate the need for key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "How does the IPsec Authentication Header (AH) ensure integrity in the presence of NAT?",
    "options": [
      "It encrypts the entire packet",
      "It cannot ensure integrity due to NAT's header modifications",
      "It uses a secret key for encryption",
      "It avoids authentication tags"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "Why is the Output Feedback (OFB) mode suitable for error-prone channels?",
    "options": [
      "It self-synchronizes like CFB",
      "It generates a keystream independently of ciphertext",
      "It requires no initialization vector",
      "It is faster than CTR mode"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Fundamentals",
    "question": "What distinguishes a symmetric cipher from an asymmetric cipher?",
    "options": [
      "It uses multiple keys for encryption",
      "It uses the same key for both encryption and decryption",
      "It relies on prime factorization",
      "It requires a public key infrastructure"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - ECC",
    "question": "Synthesize the impact of elliptic curve point addition on the efficiency of ECC-based systems.",
    "options": [
      "It increases key size requirements",
      "It enables fast scalar multiplication, reducing computational overhead",
      "It simplifies hash function design",
      "It eliminates the need for finite fields"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "In a Vigenère cipher, how does the use of a keyword enhance security over a Caesar cipher, and what remains a vulnerability?",
    "options": [
      "It eliminates frequency analysis; vulnerable to brute-force attacks",
      "It applies polyalphabetic substitution; vulnerable to known-plaintext attacks like Kasiski's method",
      "It uses transposition; vulnerable to key length guessing",
      "It requires no key; vulnerable to ciphertext-only attacks"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Quantum Computing",
    "question": "Evaluate the impact of quantum computing on the security of RSA versus elliptic curve cryptography.",
    "options": [
      "RSA is resistant to quantum attacks; ECC is vulnerable",
      "RSA is vulnerable to Shor's algorithm; ECC requires larger keys for resistance",
      "Both are equally resistant to quantum attacks",
      "Neither is affected by quantum computing"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Message Authentication",
    "question": "Synthesize the role of HMAC in ensuring message integrity and authentication.",
    "options": [
      "It encrypts the message content",
      "It combines a hash function with a secret key to verify both",
      "It generates pseudorandom numbers",
      "It replaces digital signatures"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "Synthesize why a triple transposition cipher might still fail against a chosen-plaintext attack compared to a modern block cipher.",
    "options": [
      "It uses non-linear substitution; resistant to chosen-plaintext attacks",
      "It only reorders plaintext, preserving patterns; block ciphers use confusion and diffusion",
      "It employs modular arithmetic; vulnerable to key recovery",
      "It reduces key space; resistant to cryptanalysis"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Digital Signatures",
    "question": "How does the Schnorr Digital Signature Scheme's use of linear combinations improve efficiency over Elgamal?",
    "options": [
      "It increases signature size; reduces computation",
      "It reduces signature size and exponentiations via linear combinations",
      "It avoids discrete logarithms; increases key size",
      "It simplifies verification; reduces security"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does the Chinese Remainder Theorem facilitate RSA implementation?",
    "options": [
      "It generates prime numbers",
      "It speeds up modular exponentiation with smaller computations",
      "It ensures key secrecy",
      "It computes discrete logarithms"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "Evaluate the Enigma machine's use of multiple rotors versus a single rotor, focusing on its impact on key space and cryptanalysis.",
    "options": [
      "Single rotor increases key space; simplifies cryptanalysis",
      "Multiple rotors exponentially increase key space; complicate pattern detection",
      "Multiple rotors reduce security; simplify decryption",
      "Single rotor ensures randomness; resists frequency analysis"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "In the context of DES, how does the choice of 16 rounds balance security and performance?",
    "options": [
      "Fewer rounds would suffice for modern hardware",
      "16 rounds provide adequate diffusion while maintaining efficiency",
      "More rounds would eliminate all vulnerabilities",
      "16 rounds are insufficient against brute-force attacks"
    ],
    "answer": 1
  },
  {
    "section": "Email Security",
    "question": "Evaluate the trade-offs of S/MIME's use of PKCS#7 versus PGP's message format for email security.",
    "options": [
      "PKCS#7 is less secure; simplifies implementation",
      "PKCS#7 supports complex MIME structures; PGP is simpler but less standardized",
      "PKCS#7 avoids encryption; PGP requires it",
      "PKCS#7 is decentralized; PGP is centralized"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Performance",
    "question": "Why is Triple DES (3DES) slower than AES for equivalent security?",
    "options": [
      "It uses a smaller block size",
      "It requires asymmetric keys",
      "It applies DES three times, increasing computational overhead",
      "It lacks finite field arithmetic"
    ],
    "answer": 2
  },
  {
    "section": "Email Security",
    "question": "Why is S/MIME's reliance on X.509 certificates both a strength and a limitation?",
    "options": [
      "It simplifies key management; limits scalability",
      "It ensures trust via CAs; requires complex certificate management",
      "It avoids certificates; reduces security",
      "It eliminates encryption; simplifies implementation"
    ],
    "answer": 1
  },
    {
    "section": "Cryptography - Block Ciphers",
    "question": "Why does the Data Encryption Standard (DES) S-box design incorporate non-linearity, and how does this affect cryptanalysis?",
    "options": [
      "To simplify key expansion; it reduces security",
      "To resist differential cryptanalysis; it complicates linear attacks",
      "To enable parallel processing; it increases key space",
      "To reduce round complexity; it simplifies decryption"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - PRNG",
    "question": "How does the security of a linear congruential generator (LCG) as a pseudorandom number generator compare to one based on a block cipher?",
    "options": [
      "LCG is more secure due to its simplicity",
      "LCG is predictable with known outputs; block cipher PRNGs resist prediction",
      "LCG requires no seed; block ciphers do",
      "LCG is faster but less flexible"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "Why is the AES key schedule designed to prevent related-key attacks?",
    "options": [
      "It uses a linear transformation only",
      "It incorporates non-linear operations to diversify round keys",
      "It reduces the number of rounds",
      "It avoids key expansion"
    ],
    "answer": 1
  },
  {
    "section": "Steganography",
    "question": "How does steganography using frequency domain techniques (e.g., DCT in JPEG) differ from spatial domain techniques (e.g., LSB) in terms of robustness to compression?",
    "options": [
      "Spatial domain is more robust; resists compression",
      "Frequency domain embeds data in transform coefficients, resisting compression; spatial domain is less robust",
      "Both are equally robust; compression has no impact",
      "Frequency domain avoids embedding; eliminates detection"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "Why were rotor machines like the Enigma considered complex for their time?",
    "options": [
      "They used asymmetric encryption",
      "They implemented dynamic polyalphabetic substitution with multiple rotors",
      "They relied on finite field arithmetic",
      "They generated true random numbers"
    ],
    "answer": 1
  },
  {
    "section": "PKI",
    "question": "Why is the X.509 certificate’s hierarchical trust model critical for PKI scalability?",
    "options": [
      "It eliminates the need for revocation lists",
      "It enables trusted certificate authorities to delegate trust efficiently",
      "It simplifies key generation",
      "It avoids public key distribution"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "Why is Kerberos’ ticket-granting ticket (TGT) mechanism vulnerable to key compromise at the Key Distribution Center (KDC)?",
    "options": [
      "TGT uses no encryption; easily intercepted",
      "TGT relies on the KDC’s master key; compromise leaks all session keys",
      "TGT avoids timestamps; increases security",
      "TGT simplifies authentication; reduces vulnerability"
    ],
    "answer": 1
  },
  {
    "section": "Wireless Security",
    "question": "How does IEEE 802.11i’s use of the Counter Mode with CBC-MAC Protocol (CCMP) improve security over TKIP?",
    "options": [
      "TKIP uses stronger encryption; CCMP is faster",
      "CCMP uses AES with authenticated encryption; TKIP uses weaker RC4",
      "CCMP avoids key management; TKIP requires it",
      "CCMP is less secure; TKIP supports modern devices"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "Why is the IEEE 802.1X framework’s integration with EAP-TLS more secure than EAP-MD5 for network access control?",
    "options": [
      "EAP-MD5 uses stronger encryption; less secure authentication",
      "EAP-TLS uses mutual certificate-based authentication; EAP-MD5 lacks client authentication",
      "EAP-TLS avoids certificates; EAP-MD5 requires them",
      "EAP-TLS is slower; EAP-MD5 is more secure"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hybrid Encryption",
    "question": "Evaluate the role of the Elliptic Curve Integrated Encryption Scheme (ECIES) in combining encryption and key exchange.",
    "options": [
      "ECIES avoids key exchange; simplifies encryption",
      "ECIES integrates Diffie-Hellman key exchange with symmetric encryption for efficiency",
      "ECIES uses RSA for key exchange; reduces security",
      "ECIES eliminates encryption; focuses on authentication"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "In the context of DES, how does the choice of 16 rounds balance security and performance?",
    "options": [
      "Fewer rounds would suffice for modern hardware",
      "16 rounds provide adequate diffusion while maintaining efficiency",
      "More rounds would eliminate all vulnerabilities",
      "16 rounds are insufficient against brute-force attacks"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "Evaluate why the 56-bit key size of DES became inadequate over time.",
    "options": [
      "It was too large for efficient computation",
      "Advances in computing power made brute-force attacks feasible",
      "It lacked diffusion properties",
      "It was incompatible with modern hardware"
    ],
    "answer": 1
  },
  {
    "section": "Email Security",
    "question": "What distinguishes the DomainKeys Identified Mail (DKIM) from S/MIME in email security?",
    "options": [
      "DKIM encrypts the email content",
      "DKIM verifies the sender’s domain, S/MIME provides end-to-end security",
      "DKIM requires no certificates",
      "DKIM is less secure than PGP"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "Synthesize why a triple transposition cipher might still fail against a chosen-plaintext attack compared to a modern block cipher.",
    "options": [
      "It uses non-linear substitution; resistant to chosen-plaintext attacks",
      "It only reorders plaintext, preserving patterns; block ciphers use confusion and diffusion",
      "It employs modular arithmetic; vulnerable to key recovery",
      "It reduces key space; resistant to cryptanalysis"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Key Exchange",
    "question": "Why is the Diffie-Hellman key exchange’s use of a safe prime critical for security?",
    "options": [
      "It simplifies exponentiation; reduces security",
      "It ensures a large subgroup, preventing small subgroup attacks",
      "It eliminates the need for a generator",
      "It reduces key size; enhances efficiency"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "Why is the Internet Key Exchange (IKE) protocol essential for IPsec?",
    "options": [
      "It encrypts data directly",
      "It negotiates and manages security associations",
      "It replaces hash functions",
      "It provides digital signatures"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Public Key",
    "question": "What distinguishes the Elgamal cryptosystem from RSA in terms of mathematical foundation?",
    "options": [
      "Elgamal uses prime factorization, RSA uses discrete logarithms",
      "Elgamal relies on discrete logarithms, RSA on prime factorization",
      "Elgamal is symmetric, RSA is asymmetric",
      "Elgamal requires no key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "How does the Data Encryption Standard (DES) Feistel structure ensure reversibility?",
    "options": [
      "It uses a single substitution box",
      "It applies reversible operations in each round, regardless of the key",
      "It relies on modular arithmetic",
      "It uses a non-linear key schedule"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "What is the role of the ShiftRows transformation in AES?",
    "options": [
      "It performs non-linear substitution",
      "It permutes bytes to enhance diffusion",
      "It generates round keys",
      "It compresses the state matrix"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - ECC",
    "question": "Why is elliptic curve cryptography (ECC) more efficient than RSA for equivalent security?",
    "options": [
      "ECC uses symmetric keys",
      "ECC requires smaller key sizes due to harder mathematical problems",
      "ECC avoids modular arithmetic",
      "ECC is slower but more secure"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "What distinguishes IEEE 802.1X from the Extensible Authentication Protocol (EAP)?",
    "options": [
      "802.1X is a cryptographic algorithm, EAP is a framework",
      "802.1X is a port-based access control, EAP is an authentication framework",
      "802.1X is less secure than EAP",
      "802.1X does not support wireless networks"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Message Authentication",
    "question": "Why is HMAC resistant to length extension attacks, unlike a plain hash function?",
    "options": [
      "It uses a smaller hash output",
      "It incorporates a secret key and processes the input twice",
      "It avoids padding the input",
      "It requires no hash function"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Digital Signatures",
    "question": "How does the Schnorr signature scheme’s use of a random nonce affect its security?",
    "options": [
      "It simplifies verification; reduces security",
      "It ensures signature uniqueness; nonce reuse can leak the private key",
      "It avoids hash functions; eliminates vulnerabilities",
      "It increases signature size; enhances security"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "Synthesize the importance of combining security associations in IPsec.",
    "options": [
      "It reduces encryption strength",
      "It allows flexible security policies for complex communication",
      "It eliminates the need for IKE",
      "It simplifies key management"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - MAC",
    "question": "Why is CMAC’s use of two subkeys critical for its security compared to a plain CBC-MAC?",
    "options": [
      "Subkeys simplify computation; reduce security",
      "Subkeys prevent length extension attacks by modifying final blocks",
      "Subkeys eliminate padding; increase vulnerability",
      "Subkeys increase key size; simplify cryptanalysis"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "How does IPsec’s use of security associations (SAs) ensure flexibility in secure communication?",
    "options": [
      "SAs simplify encryption; reduce security",
      "SAs define specific security policies, allowing tailored protection",
      "SAs avoid key exchange; simplify implementation",
      "SAs increase key size; enhance vulnerability"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Digital Signatures",
    "question": "Why is RSA-PSS considered a probabilistic signature scheme compared to deterministic schemes like DSA?",
    "options": [
      "It uses a fixed salt value",
      "It incorporates random padding, enhancing security against chosen-message attacks",
      "It avoids hash functions",
      "It requires no private key"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "Why is DES’s use of a 56-bit key with 8 parity bits vulnerable to modern brute-force attacks, and what subtle design choice exacerbates this?",
    "options": [
      "Parity bits increase key space; weak S-boxes reduce security",
      "56-bit effective key length is too short; parity bits reduce entropy",
      "Parity bits ensure randomness; key schedule simplifies attacks",
      "56-bit key is sufficient; S-boxes amplify vulnerability"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "Synthesize the role of IPsec’s Anti-Replay Window in preventing replay attacks, and why it’s insufficient alone.",
    "options": [
      "Anti-Replay Window encrypts packets; sufficient for all attacks",
      "Anti-Replay Window tracks packet sequence numbers; requires authentication to prevent tampering",
      "Anti-Replay Window simplifies decryption; vulnerable to key recovery",
      "Anti-Replay Window eliminates authentication; enhances security"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does Euler’s Totient Function underpin the RSA algorithm’s key generation?",
    "options": [
      "It generates random primes",
      "It computes the number of coprimes for the modulus, enabling key pair creation",
      "It ensures collision resistance",
      "It simplifies discrete logarithm computation"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "What is a key advantage of Counter (CTR) mode over Cipher Feedback (CFB) mode?",
    "options": [
      "CTR requires an initialization vector",
      "CTR allows parallel processing of blocks",
      "CTR is less secure but faster",
      "CTR uses feedback from ciphertext"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "Why is the use of a counter in CTR mode critical for its security, and what happens if the counter repeats?",
    "options": [
      "Counter simplifies decryption; repetition has no impact",
      "Counter ensures unique keystreams; repetition causes keystream reuse, enabling XOR attacks",
      "Counter increases key size; repetition enhances security",
      "Counter eliminates IVs; repetition simplifies cryptanalysis"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "How does SHA-3 differ from SHA-2 in its design?",
    "options": [
      "SHA-3 uses a Feistel network, SHA-2 uses a sponge construction",
      "SHA-3 uses a sponge construction, SHA-2 uses a Merkle-Damgård structure",
      "SHA-3 is less secure than SHA-2",
      "SHA-3 requires a larger key"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "Why is EAP-TLS’s mutual authentication critical for IEEE 802.1X, and what subtle flaw persists in misconfigured implementations?",
    "options": [
      "Mutual authentication simplifies key exchange; no flaws exist",
      "Mutual authentication ensures client-server trust; misconfigured certificates enable impersonation",
      "Mutual authentication avoids certificates; vulnerable to brute-force attacks",
      "Mutual authentication reduces security; vulnerable to key recovery"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Hash Functions",
    "question": "Synthesize the security implications of SHA-3’s sponge construction versus SHA-2’s Merkle-Damgård for preimage resistance.",
    "options": [
      "SHA-3 is less resistant; sponge simplifies attacks",
      "SHA-3’s capacity enhances preimage resistance; Merkle-Damgård is weaker to extensions",
      "SHA-2 avoids padding; SHA-3 is vulnerable",
      "Both are equally resistant; no differences exist"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - ECC",
    "question": "Evaluate the security implications of using a weak elliptic curve with a low-order point in ECC.",
    "options": [
      "It increases efficiency; maintains security",
      "It allows attacks like invalid curve attacks, compromising the private key",
      "It simplifies arithmetic; eliminates vulnerabilities",
      "It reduces key size; enhances security"
    ],
    "answer": 1
  },
  {
    "section": "Email Security",
    "question": "Why is S/MIME’s use of CMS (Cryptographic Message Syntax) more flexible than PGP for enterprise email security?",
    "options": [
      "CMS avoids encryption; PGP requires it",
      "CMS supports multiple cryptographic algorithms; PGP is limited to specific ciphers",
      "CMS is decentralized; PGP is centralized",
      "CMS simplifies key management; PGP is more secure"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does Fermat’s Little Theorem support RSA encryption?",
    "options": [
      "It generates random numbers",
      "It ensures modular exponentiation properties for key generation",
      "It computes discrete logarithms",
      "It defines elliptic curves"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "How does the structure of a finite field in GF(2^8) support AES operations?",
    "options": [
      "It simplifies key expansion",
      "It enables efficient polynomial arithmetic for S-boxes",
      "It reduces key size",
      "It avoids modular arithmetic"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Key Management",
    "question": "Why is key wrapping important in cryptographic key management?",
    "options": [
      "It generates pseudorandom numbers",
      "It securely encrypts keys for storage or transmission",
      "It authenticates users",
      "It compresses ciphertext"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "Why is the DES S-box design resistant to differential cryptanalysis, and what subtle flaw still exists?",
    "options": [
      "It uses linear mappings; vulnerable to linear cryptanalysis",
      "It employs non-linear mappings with specific difference distribution tables; vulnerable to linear cryptanalysis",
      "It avoids substitution; susceptible to brute-force attacks",
      "It uses fixed permutations; vulnerable to key recovery"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "Why is the AES key expansion’s use of round constants critical for preventing slide attacks?",
    "options": [
      "Round constants simplify key generation; increase vulnerability",
      "Round constants break key symmetry, preventing repetitive patterns",
      "Round constants reduce key size; simplify cryptanalysis",
      "Round constants eliminate non-linearity; enhance security"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - IPsec",
    "question": "Evaluate the role of IPsec’s Internet Key Exchange (IKE) in establishing secure VPNs.",
    "options": [
      "It encrypts data directly",
      "It negotiates security associations and keys for secure communication",
      "It replaces ESP and AH",
      "It simplifies packet processing"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Digital Signatures",
    "question": "Evaluate the trade-offs of using ECDSA over RSA-PSS for digital signatures in resource-constrained devices.",
    "options": [
      "ECDSA requires larger keys, reducing efficiency",
      "ECDSA uses smaller keys, improving efficiency but requiring curve selection",
      "ECDSA avoids hash functions, simplifying signatures",
      "ECDSA is less secure than RSA-PSS"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - TLS",
    "question": "Synthesize the role of TLS’s handshake protocol in ensuring secure web communication.",
    "options": [
      "It compresses data for efficiency",
      "It negotiates cryptographic parameters and authenticates parties",
      "It eliminates the need for certificates",
      "It avoids key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - RSA",
    "question": "How does the Chinese Remainder Theorem facilitate RSA implementation?",
    "options": [
      "It generates prime numbers",
      "It speeds up modular exponentiation with smaller computations",
      "It ensures key secrecy",
      "It computes discrete logarithms"
    ],
    "answer": 1
  },
  {
    "section": "Classical Cryptography",
    "question": "Evaluate the impact of rotor machine wiring complexity (e.g., Enigma’s plugboard) on cryptographic strength.",
    "options": [
      "It reduces the key space significantly",
      "It increases the number of possible substitutions, complicating cryptanalysis",
      "It eliminates the need for multiple rotors",
      "It makes the cipher vulnerable to frequency analysis"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Key Management",
    "question": "Synthesize the challenges of symmetric key distribution using a key derivation function (KDF) in a hybrid encryption system.",
    "options": [
      "KDF simplifies key exchange; eliminates vulnerabilities",
      "KDF ensures secure key derivation; requires secure initial key exchange",
      "KDF avoids asymmetric encryption; reduces security",
      "KDF increases key size; simplifies cryptanalysis"
    ],
    "answer": 1
  },
  {
    "section": "Steganography",
    "question": "How does steganography using wavelet transforms differ from LSB embedding in terms of robustness and detectability?",
    "options": [
      "Wavelet transforms are less robust; more detectable due to key usage",
      "Wavelet transforms modify frequency domains, improving robustness but risking statistical detection",
      "Wavelet transforms are undetectable; less robust to noise",
      "Wavelet transforms require no embedding; eliminate detection risks"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - Authentication",
    "question": "How does Federated Identity Management improve user authentication across domains?",
    "options": [
      "It uses symmetric encryption only",
      "It allows single sign-on with trusted identity providers",
      "It eliminates the need for certificates",
      "It requires manual key exchange"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - AES",
    "question": "In AES, how does the MixColumns transformation contribute to diffusion, and why is it absent in the final round?",
    "options": [
      "It substitutes bytes; included in all rounds",
      "It mixes bytes across columns; omitted in the final round to simplify decryption",
      "It generates round keys; always included",
      "It compresses the state; omitted for speed"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Post-Quantum",
    "question": "Synthesize the challenges of symmetric key distribution using asymmetric encryption in a post-quantum cryptography context.",
    "options": [
      "Asymmetric encryption is immune to quantum attacks; simplifies distribution",
      "Asymmetric encryption is vulnerable to quantum attacks; requires quantum-resistant algorithms",
      "Symmetric keys are quantum-resistant; asymmetric is unnecessary",
      "Quantum attacks simplify key distribution; no challenges exist"
    ],
    "answer": 1
  },
  {
    "section": "Network Security - TLS",
    "question": "Evaluate the security trade-offs of TLS 1.3’s removal of RSA key exchange compared to TLS 1.2.",
    "options": [
      "TLS 1.3 is less secure; RSA is robust",
      "TLS 1.3 enhances forward secrecy by using ephemeral keys; RSA lacks forward secrecy",
      "TLS 1.3 avoids key exchange; TLS 1.2 requires it",
      "TLS 1.3 simplifies encryption; TLS 1.2 is more complex"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - DES",
    "question": "Why was the Data Encryption Standard (DES) considered weak by the late 1990s?",
    "options": [
      "Its block size was too large",
      "It used asymmetric encryption",
      "Its 56-bit key was vulnerable to brute-force attacks",
      "It lacked substitution boxes"
    ],
    "answer": 2
  },
  {
    "section": "Cryptography - Block Cipher Modes",
    "question": "Why is XTS-AES mode specifically designed for block-oriented storage devices?",
    "options": [
      "It uses stream-based encryption",
      "It provides data confidentiality with sector-specific tweaks",
      "It requires no key expansion",
      "It is faster than CBC mode"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Stream Ciphers",
    "question": "Evaluate the security implications of RC4’s keystream biases.",
    "options": [
      "They make RC4 suitable for modern applications",
      "They allow attackers to predict parts of the keystream",
      "They enhance its resistance to brute-force attacks",
      "They ensure collision resistance"
    ],
    "answer": 1
  },
  {
    "section": "PKI",
    "question": "Why is the X.509 certificate revocation list (CRL) critical in PKI?",
    "options": [
      "It generates new certificates",
      "It tracks compromised or expired certificates",
      "It encrypts private keys",
      "It authenticates users directly"
    ],
    "answer": 1
  },
  {
    "section": "Cryptography - Encryption Modes",
    "question": "Synthesize the role of authenticated encryption in preventing chosen-ciphertext attacks compared to encryption-only modes.",
    "options": [
      "It simplifies decryption; increases vulnerability",
      "It combines encryption and authentication, rejecting invalid ciphertexts",
      "It avoids authentication tags; reduces security",
      "It eliminates key exchange; simplifies attacks"
    ],
    "answer": 1
  },
      {
        "section": "Schnorr Digital Signature Scheme",
        "question": "How does the Schnorr Digital Signature Scheme\u2019s use of linear combinations improve efficiency over Elgamal?",
        "options": [
            "It increases signature size; reduces computation",
            "It reduces signature size and exponentiations via linear combinations",
            "It avoids discrete logarithms; increases key size",
            "It simplifies verification; reduces security"
        ],
        "answer": 1
    },
    {
        "section": "Message Authentication Code (MAC)",
        "question": "What is the primary purpose of a Message Authentication Code (MAC)?",
        "options": [
            "To encrypt data",
            "To verify message integrity and authenticity",
            "To generate random numbers",
            "To perform key exchange"
        ],
        "answer": 1
    },
    {
        "section": "AES - Finite Field Arithmetic",
        "question": "Why is the choice of an irreducible polynomial critical in GF(2^n) for AES, and what happens if a reducible polynomial is used?",
        "options": [
            "It simplifies arithmetic; reducible polynomials maintain security",
            "It defines field operations; reducible polynomials allow factorization, breaking security",
            "It reduces key size; reducible polynomials are more efficient",
            "It ensures reversibility; reducible polynomials simplify decryption"
        ],
        "answer": 1
    },
    {
        "section": "AES Transformations",
        "question": "How does AES\u2019s MixColumns transformation differ from ShiftRows in its structure?",
        "options": [
            "MixColumns shifts rows, ShiftRows mixes columns",
            "MixColumns performs linear transformation, ShiftRows permutes bytes",
            "MixColumns is optional, ShiftRows is mandatory",
            "MixColumns uses a fixed key, ShiftRows does not"
        ],
        "answer": 1
    },
    {
        "section": "Email Security",
        "question": "Why is DomainKeys Identified Mail (DKIM) insufficient for end-to-end email security compared to PGP?",
        "options": [
            "DKIM encrypts the email content",
            "DKIM verifies the sender\u2019s domain, not the message content or recipient",
            "DKIM requires no signatures",
            "DKIM is more secure than PGP"
        ],
        "answer": 1
    },
    {
        "section": "Symmetric vs Asymmetric",
        "question": "What distinguishes a symmetric cipher from an asymmetric cipher?",
        "options": [
            "It uses multiple keys for encryption",
            "It uses the same key for both encryption and decryption",
            "It relies on prime factorization",
            "It requires a public key infrastructure"
        ],
        "answer": 1
    },
    {
        "section": "Digital Signature Efficiency",
        "question": "How does the Elgamal Digital Signature Scheme differ from the Schnorr scheme in terms of efficiency?",
        "options": [
            "Elgamal produces shorter signatures",
            "Schnorr uses fewer exponentiations, reducing computational cost",
            "Elgamal avoids discrete logarithms",
            "Schnorr requires larger keys"
        ],
        "answer": 1
    },
    {
        "section": "Classical Ciphers",
        "question": "How does a Caesar cipher differ from a Vigen\u00e8re cipher in substitution techniques?",
        "options": [
            "Caesar uses multiple keys, Vigen\u00e8re uses one",
            "Caesar shifts letters by a fixed amount, Vigen\u00e8re uses a keyword",
            "Caesar is a transposition cipher, Vigen\u00e8re is not",
            "Caesar is more secure than Vigen\u00e8re"
        ],
        "answer": 1
    },
    {
        "section": "Steganography",
        "question": "How does steganography\u2019s use of least significant bit (LSB) embedding in images differ from cryptographic substitution in terms of detectability?",
        "options": [
            "LSB is more detectable due to its use of keys",
            "LSB alters image data subtly, but statistical analysis can reveal anomalies",
            "LSB is completely undetectable compared to substitution",
            "LSB requires a larger key space than substitution"
        ],
        "answer": 1
    },
    {
        "section": "AES Key Expansion",
        "question": "How does the AES key expansion process ensure security?",
        "options": [
            "It compresses the key to reduce size",
            "It generates unique round keys from the original key",
            "It encrypts the key with a hash function",
            "It uses a single key for all rounds"
        ],
        "answer": 1
    },
    {
        "section": "AES Non-Linearity",
        "question": "Evaluate why the AES key expansion algorithm uses a non-linear function like the S-box.",
        "options": [
            "To reduce the key size",
            "To prevent related-key attacks by ensuring diverse round keys",
            "To simplify decryption",
            "To eliminate the need for MixColumns"
        ],
        "answer": 1
    },
    {
        "section": "DES Feistel",
        "question": "Synthesize the role of the DES Feistel network\u2019s swap operation in ensuring reversibility, and why it\u2019s critical for decryption.",
        "options": [
            "Swap operation simplifies encryption; irrelevant for decryption",
            "Swap operation ensures identical encryption/decryption structure; critical for reversible rounds",
            "Swap operation reduces key size; complicates decryption",
            "Swap operation eliminates diffusion; simplifies cryptanalysis"
        ],
        "answer": 1
    },
    {
        "section": "Elliptic Curve Cryptography",
        "question": "Why is the Schnorr signature scheme considered efficient for elliptic curve cryptography?",
        "options": [
            "It uses larger keys than ECDSA",
            "It produces shorter signatures with simpler computations",
            "It avoids elliptic curve arithmetic",
            "It requires no hash functions"
        ],
        "answer": 1
    },
    {
        "section": "Authentication Protocols",
        "question": "Why is the Extensible Authentication Protocol (EAP) flexible for network access control?",
        "options": [
            "It uses a single authentication method",
            "It supports multiple authentication protocols within a framework",
            "It requires no certificates",
            "It is incompatible with 802.1X"
        ],
        "answer": 1
    },
    {
        "section": "Kerberos",
        "question": "How does the Kerberos authentication protocol ensure secure user authentication?",
        "options": [
            "It uses public-key cryptography exclusively",
            "It relies on a trusted key distribution center with symmetric encryption",
            "It avoids timestamps for security",
            "It requires no session keys"
        ],
        "answer": 1
    },
    {
        "section": "CMAC",
        "question": "How does the CMAC algorithm ensure security compared to a simple CBC-based MAC?",
        "options": [
            "CMAC avoids padding entirely",
            "CMAC uses subkeys to prevent length extension attacks",
            "CMAC is slower but less secure",
            "CMAC requires no block cipher"
        ],
        "answer": 1
    },
    {
        "section": "PRNG Security",
        "question": "Why is a block cipher-based PRNG in CTR mode more secure than a linear feedback shift register (LFSR), and what subtle flaw persists?",
        "options": [
            "LFSR is more random; CTR is predictable",
            "CTR leverages block cipher security; counter reuse can leak keystream",
            "CTR avoids seeds; LFSR requires them",
            "LFSR is faster; CTR is less secure"
        ],
        "answer": 1
    },
    {
        "section": "RSA",
        "question": "How does Fermat\u2019s Little Theorem ensure the correctness of RSA\u2019s encryption and decryption process?",
        "options": [
            "It generates prime numbers for the modulus",
            "It guarantees modular exponentiation returns the original message",
            "It simplifies discrete logarithm computation",
            "It ensures collision resistance in signatures"
        ],
        "answer": 1
    },
    {
        "section": "Elliptic Curve Cryptography",
        "question": "In elliptic curve cryptography, why is the choice of a non-singular curve critical, and what subtle attack exploits a singular curve?",
        "options": [
            "Singular curves increase efficiency; no attacks exist",
            "Non-singular curves ensure group structure; singular curves enable point factorization attacks",
            "Singular curves enhance security; resist cryptanalysis",
            "Non-singular curves simplify arithmetic; vulnerable to key recovery"
        ],
        "answer": 1
    },
    {
        "section": "Classical Transposition",
        "question": "How does a rail fence cipher differ from a columnar transposition cipher?",
        "options": [
            "Rail fence uses substitution, columnar uses permutation",
            "Rail fence arranges letters in a zigzag pattern, columnar uses a grid",
            "Rail fence is more secure than columnar",
            "Rail fence requires a numerical key"
        ],
        "answer": 1
    },
    {
        "section": "Steganography + Cryptography",
        "question": "How does steganography complement cryptography in secure communication?",
        "options": [
            "It encrypts the message content",
            "It hides the existence of the message, adding a layer of secrecy",
            "It generates pseudorandom keys",
            "It authenticates the sender"
        ],
        "answer": 1
    },
    {
        "section": "AES Weak Keys",
        "question": "Why does the AES key expansion algorithm incorporate RotWord and SubWord to prevent weak keys?",
        "options": [
            "They simplify key generation; weak keys remain possible",
            "They introduce non-linearity and rotation, disrupting key patterns",
            "They reduce key size; weak keys are eliminated",
            "They avoid key expansion; weak keys are irrelevant"
        ],
        "answer": 1
    },
  {
    "id": 283,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "128, 192, 256 bits",
      "64, 128, 192 bits",
      "56, 112, 168 bits"
    ],
    "answer": 1
  },
  {
    "id": 264,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "RSA",
      "ECB",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 240,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "One-Time Pad",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 51,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "SSH",
      "PGP",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 191,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "HMAC is based on?",
    "options": [
      "Substitution ciphers",
      "Block cipher",
      "Stream cipher",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 176,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "ECB",
      "AES",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 148,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Integer factorization",
      "Hash collision"
    ],
    "answer": 2
  },
  {
    "id": 126,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Auditability",
      "Integrity Checking",
      "Cryptanalysis"
    ],
    "answer": 0
  },
  {
    "id": 103,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "RSA",
      "DES",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Substitution ciphers",
      "Block cipher",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 85,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Integrity Checking",
      "Confidentiality",
      "Cryptanalysis",
      "Auditability"
    ],
    "answer": 1
  },
  {
    "id": 104,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "32 bits",
      "128 bits",
      "56 bits"
    ],
    "answer": 0
  },
  {
    "id": 57,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "HMAC is based on?",
    "options": [
      "Block cipher",
      "Substitution ciphers",
      "Stream cipher",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 81,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "One-Time Pad",
      "Caesar Cipher",
      "Rail Fence",
      "Vigen\u00e8re Cipher"
    ],
    "answer": 1
  },
  {
    "id": 293,
    "chapter": "Chapter 20: IP Security",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Integrity Checking",
      "Confidentiality",
      "Cryptanalysis"
    ],
    "answer": 2
  },
  {
    "id": 161,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "HMAC is based on?",
    "options": [
      "Substitution ciphers",
      "Hash functions",
      "Stream cipher",
      "Block cipher"
    ],
    "answer": 1
  },
  {
    "id": 156,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Cryptanalysis",
      "Integrity Checking"
    ],
    "answer": 1
  },
  {
    "id": 132,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "answer": 2
  },
  {
    "id": 72,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Cryptanalysis",
      "Auditability",
      "Integrity Checking"
    ],
    "answer": 0
  },
  {
    "id": 44,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "ESP",
      "SSL",
      "TLS"
    ],
    "answer": 1
  },
  {
    "id": 253,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "PGP",
      "SSH",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 182,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Operating systems",
      "Email",
      "Databases",
      "Networks"
    ],
    "answer": 1
  },
  {
    "id": 298,
    "chapter": "Chapter 20: IP Security",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Stream cipher",
      "Substitution ciphers",
      "Block cipher"
    ],
    "answer": 0
  },
  {
    "id": 83,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which is a one-way hash function?",
    "options": [
      "AES",
      "RSA",
      "SHA-256",
      "DES"
    ],
    "answer": 2
  },
  {
    "id": 291,
    "chapter": "Chapter 20: IP Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "ECB",
      "AES",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 108,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "32 bits",
      "64 bits",
      "56 bits"
    ],
    "answer": 2
  },
  {
    "id": 47,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "AH",
      "SSL",
      "TLS"
    ],
    "answer": 0
  },
  {
    "id": 107,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Vigen\u00e8re Cipher",
      "One-Time Pad",
      "Rail Fence",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 119,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "CBC",
      "ECB",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 130,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Email",
      "Networks",
      "Databases",
      "Operating systems"
    ],
    "answer": 0
  },
  {
    "id": 79,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "RSA",
      "CBC",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 221,
    "chapter": "Chapter 15: User Authentication",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Integer factorization",
      "Discrete logarithm",
      "Elliptic curve addition"
    ],
    "answer": 1
  },
  {
    "id": 206,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "56, 112, 168 bits",
      "32, 64, 128 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 289,
    "chapter": "Chapter 20: IP Security",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Networks",
      "Email",
      "Operating systems"
    ],
    "answer": 2
  },
  {
    "id": 248,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "AH",
      "SSL",
      "TLS"
    ],
    "answer": 0
  },
  {
    "id": 174,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "56 bits",
      "32 bits",
      "128 bits"
    ],
    "answer": 0
  },
  {
    "id": 92,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "HMAC is based on?",
    "options": [
      "Block cipher",
      "Substitution ciphers",
      "Hash functions",
      "Stream cipher"
    ],
    "answer": 2
  },
  {
    "id": 60,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Vigen\u00e8re Cipher",
      "Rail Fence",
      "One-Time Pad",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 164,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "32 bits",
      "56 bits",
      "128 bits"
    ],
    "answer": 0
  },
  {
    "id": 147,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "DES",
      "RSA",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 262,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "ECB",
      "RSA",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 210,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "ESP",
      "AH",
      "TLS"
    ],
    "answer": 1
  },
  {
    "id": 110,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits"
    ],
    "answer": 2
  },
  {
    "id": 90,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "IEEE 802.11i",
      "IPSec",
      "TLS 1.2"
    ],
    "answer": 1
  },
  {
    "id": 292,
    "chapter": "Chapter 20: IP Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "TLS",
      "ESP",
      "SSL"
    ],
    "answer": 2
  },
  {
    "id": 22,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "64, 128, 192 bits",
      "56, 112, 168 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 106,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "IEEE 802.11i",
      "IPSec",
      "TLS 1.2"
    ],
    "answer": 1
  },
  {
    "id": 97,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "56, 112, 168 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 24,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Elliptic curve addition",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 94,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Hash collision",
      "Integer factorization",
      "Elliptic curve addition"
    ],
    "answer": 2
  },
  {
    "id": 4,
    "chapter": "Chapter 1: Overview",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "32, 64, 128 bits",
      "56, 112, 168 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 218,
    "chapter": "Chapter 15: User Authentication",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Hash collision",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 163,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which is a one-way hash function?",
    "options": [
      "DES",
      "SHA-256",
      "RSA",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 141,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "TLS 1.2",
      "IPSec",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 217,
    "chapter": "Chapter 15: User Authentication",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Operating systems",
      "Email",
      "Networks"
    ],
    "answer": 2
  },
  {
    "id": 63,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "ESP",
      "TLS",
      "AH"
    ],
    "answer": 1
  },
  {
    "id": 127,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Elliptic curve addition",
      "Hash collision",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 48,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Networks",
      "Operating systems",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 28,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "PGP",
      "TLS",
      "SSH"
    ],
    "answer": 2
  },
  {
    "id": 173,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Integrity Checking",
      "Auditability",
      "Cryptanalysis"
    ],
    "answer": 0
  },
  {
    "id": 7,
    "chapter": "Chapter 1: Overview",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "SSL",
      "TLS",
      "ESP"
    ],
    "answer": 3
  },
  {
    "id": 9,
    "chapter": "Chapter 1: Overview",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Substitution ciphers",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 98,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "AH",
      "ESP",
      "TLS"
    ],
    "answer": 2
  },
  {
    "id": 1,
    "chapter": "Chapter 1: Overview",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Integer factorization",
      "Elliptic curve addition",
      "Discrete logarithm"
    ],
    "answer": 1
  },
  {
    "id": 86,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "RC4",
      "Diffie-Hellman",
      "DSA",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 39,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Operating systems",
      "Email",
      "Networks",
      "Databases"
    ],
    "answer": 1
  },
  {
    "id": 247,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Caesar Cipher",
      "One-Time Pad",
      "Rail Fence",
      "Vigen\u00e8re Cipher"
    ],
    "answer": 0
  },
  {
    "id": 183,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Hash functions",
      "Substitution ciphers"
    ],
    "answer": 2
  },
  {
    "id": 265,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IEEE 802.11i",
      "IEEE 802.1X",
      "IPSec"
    ],
    "answer": 1
  },
  {
    "id": 222,
    "chapter": "Chapter 15: User Authentication",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits",
      "64, 128, 192 bits"
    ],
    "answer": 1
  },
  {
    "id": 227,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Email",
      "Operating systems",
      "Databases",
      "Networks"
    ],
    "answer": 0
  },
  {
    "id": 112,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "SSL",
      "TLS",
      "ESP"
    ],
    "answer": 3
  },
  {
    "id": 288,
    "chapter": "Chapter 20: IP Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "ECB",
      "AES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 23,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "AES",
      "ECB",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 285,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "128 bits",
      "56 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 15,
    "chapter": "Chapter 1: Overview",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "CBC",
      "RSA",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 146,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "AES",
      "RSA",
      "ECB"
    ],
    "answer": 0
  },
  {
    "id": 100,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which is a one-way hash function?",
    "options": [
      "DES",
      "RSA",
      "AES",
      "SHA-256"
    ],
    "answer": 3
  },
  {
    "id": 45,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Networks",
      "Email",
      "Databases",
      "Operating systems"
    ],
    "answer": 1
  },
  {
    "id": 142,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "56 bits",
      "32 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 154,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Hash collision",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 214,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "Caesar Cipher",
      "One-Time Pad"
    ],
    "answer": 2
  },
  {
    "id": 159,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "TLS",
      "SSH",
      "IPSec"
    ],
    "answer": 1
  },
  {
    "id": 201,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "IPSec",
      "TLS",
      "PGP"
    ],
    "answer": 2
  },
  {
    "id": 226,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Substitution ciphers",
      "Block cipher",
      "Stream cipher"
    ],
    "answer": 0
  },
  {
    "id": 242,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which is a one-way hash function?",
    "options": [
      "AES",
      "RSA",
      "DES",
      "SHA-256"
    ],
    "answer": 3
  },
  {
    "id": 251,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "AES",
      "SHA-256",
      "DES"
    ],
    "answer": 2
  },
  {
    "id": 172,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits",
      "56, 112, 168 bits"
    ],
    "answer": 1
  },
  {
    "id": 19,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "SSL",
      "AH",
      "TLS"
    ],
    "answer": 0
  },
  {
    "id": 281,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Operating systems",
      "Networks",
      "Databases",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 171,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "AES",
      "RSA",
      "ECB"
    ],
    "answer": 0
  },
  {
    "id": 193,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Networks",
      "Email",
      "Operating systems"
    ],
    "answer": 2
  },
  {
    "id": 165,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Integrity Checking",
      "Cryptanalysis"
    ],
    "answer": 1
  },
  {
    "id": 266,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "ECB",
      "CBC",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 84,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "RSA",
      "AES",
      "ECB"
    ],
    "answer": 0
  },
  {
    "id": 118,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "ESP",
      "TLS",
      "AH"
    ],
    "answer": 1
  },
  {
    "id": 87,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Substitution ciphers",
      "Block cipher",
      "Stream cipher"
    ],
    "answer": 0
  },
  {
    "id": 259,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "AH",
      "TLS",
      "ESP"
    ],
    "answer": 3
  },
  {
    "id": 232,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "One-Time Pad",
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 76,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "64, 128, 192 bits",
      "56, 112, 168 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 82,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "TLS",
      "AH",
      "SSL"
    ],
    "answer": 0
  },
  {
    "id": 277,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "64 bits",
      "32 bits",
      "56 bits"
    ],
    "answer": 1
  },
  {
    "id": 178,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "32 bits",
      "64 bits",
      "56 bits"
    ],
    "answer": 2
  },
  {
    "id": 244,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "IPSec",
      "TLS",
      "SSH"
    ],
    "answer": 2
  },
  {
    "id": 250,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "128 bits",
      "56 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 61,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Hash collision",
      "Integer factorization",
      "Elliptic curve addition"
    ],
    "answer": 2
  },
  {
    "id": 37,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits",
      "64, 128, 192 bits"
    ],
    "answer": 1
  },
  {
    "id": 188,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Cryptanalysis",
      "Confidentiality",
      "Auditability",
      "Integrity Checking"
    ],
    "answer": 1
  },
  {
    "id": 229,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "32, 64, 128 bits",
      "128, 192, 256 bits",
      "64, 128, 192 bits"
    ],
    "answer": 2
  },
  {
    "id": 53,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "IPSec",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 263,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "Diffie-Hellman",
      "DSA",
      "AES",
      "RC4"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "ECB",
      "AES",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 187,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "32 bits",
      "128 bits",
      "56 bits"
    ],
    "answer": 0
  },
  {
    "id": 189,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Hash functions",
      "Substitution ciphers",
      "Block cipher"
    ],
    "answer": 1
  },
  {
    "id": 213,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IPSec",
      "IEEE 802.11i",
      "IEEE 802.1X"
    ],
    "answer": 2
  },
  {
    "id": 278,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "128 bits",
      "56 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 30,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "56, 112, 168 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 286,
    "chapter": "Chapter 20: IP Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "answer": 2
  },
  {
    "id": 137,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which is a one-way hash function?",
    "options": [
      "DES",
      "RSA",
      "SHA-256",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 192,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "answer": 2
  },
  {
    "id": 71,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Integer factorization",
      "Elliptic curve addition",
      "Discrete logarithm",
      "Hash collision"
    ],
    "answer": 0
  },
  {
    "id": 205,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Hash collision",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 109,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "AES",
      "DSA",
      "RC4",
      "Diffie-Hellman"
    ],
    "answer": 1
  },
  {
    "id": 245,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "IPSec",
      "TLS",
      "SSH"
    ],
    "answer": 2
  },
  {
    "id": 254,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IPSec",
      "IEEE 802.1X",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 219,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IEEE 802.1X",
      "IPSec",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 144,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Networks",
      "Operating systems",
      "Databases",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 202,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IPSec",
      "TLS 1.2",
      "IEEE 802.1X",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 272,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "AES",
      "CBC",
      "RSA"
    ],
    "answer": 2
  },
  {
    "id": 168,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "CBC",
      "ECB",
      "RSA"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "64 bits",
      "32 bits",
      "56 bits"
    ],
    "answer": 1
  },
  {
    "id": 239,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Substitution ciphers",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 131,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "IPSec",
      "SSH",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 194,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "TLS",
      "PGP",
      "SSH"
    ],
    "answer": 1
  },
  {
    "id": 231,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "SSL",
      "ESP",
      "TLS"
    ],
    "answer": 2
  },
  {
    "id": 66,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits",
      "56, 112, 168 bits"
    ],
    "answer": 2
  },
  {
    "id": 133,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "128 bits",
      "32 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 14,
    "chapter": "Chapter 1: Overview",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Substitution ciphers",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 70,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which is a one-way hash function?",
    "options": [
      "AES",
      "RSA",
      "SHA-256",
      "DES"
    ],
    "answer": 2
  },
  {
    "id": 34,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "AES supports which key lengths?",
    "options": [
      "128, 192, 256 bits",
      "64, 128, 192 bits",
      "32, 64, 128 bits",
      "56, 112, 168 bits"
    ],
    "answer": 0
  },
  {
    "id": 195,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Stream cipher",
      "Block cipher",
      "Substitution ciphers"
    ],
    "answer": 0
  },
  {
    "id": 123,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Integer factorization",
      "Discrete logarithm",
      "Elliptic curve addition",
      "Hash collision"
    ],
    "answer": 0
  },
  {
    "id": 212,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "DES",
      "AES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 6,
    "chapter": "Chapter 1: Overview",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Auditability",
      "Integrity Checking",
      "Cryptanalysis"
    ],
    "answer": 0
  },
  {
    "id": 167,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "PGP",
      "SSH",
      "IPSec"
    ],
    "answer": 0
  },
  {
    "id": 271,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Cryptanalysis",
      "Integrity Checking"
    ],
    "answer": 1
  },
  {
    "id": 73,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Networks",
      "Email",
      "Operating systems",
      "Databases"
    ],
    "answer": 1
  },
  {
    "id": 56,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "TLS",
      "PGP",
      "IPSec"
    ],
    "answer": 1
  },
  {
    "id": 179,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "32, 64, 128 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 151,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "HMAC is based on?",
    "options": [
      "Block cipher",
      "Substitution ciphers",
      "Stream cipher",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 223,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "RSA",
      "DES",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 160,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "AH",
      "ESP",
      "TLS"
    ],
    "answer": 2
  },
  {
    "id": 296,
    "chapter": "Chapter 20: IP Security",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Integer factorization",
      "Hash collision",
      "Discrete logarithm",
      "Elliptic curve addition"
    ],
    "answer": 0
  },
  {
    "id": 200,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "RSA",
      "CBC",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 43,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "One-Time Pad",
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 215,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "AES",
      "DSA",
      "RC4",
      "Diffie-Hellman"
    ],
    "answer": 1
  },
  {
    "id": 74,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Integer factorization",
      "Hash collision"
    ],
    "answer": 2
  },
  {
    "id": 16,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "AES supports which key lengths?",
    "options": [
      "128, 192, 256 bits",
      "56, 112, 168 bits",
      "64, 128, 192 bits",
      "32, 64, 128 bits"
    ],
    "answer": 0
  },
  {
    "id": 36,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Cryptanalysis",
      "Integrity Checking"
    ],
    "answer": 1
  },
  {
    "id": 77,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Operating systems",
      "Networks",
      "Email",
      "Databases"
    ],
    "answer": 2
  },
  {
    "id": 170,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Hash functions",
      "Substitution ciphers"
    ],
    "answer": 2
  },
  {
    "id": 270,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "56 bits",
      "32 bits",
      "128 bits"
    ],
    "answer": 0
  },
  {
    "id": 120,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "IEEE 802.11i",
      "IPSec",
      "TLS 1.2"
    ],
    "answer": 1
  },
  {
    "id": 224,
    "chapter": "Chapter 15: User Authentication",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "128 bits",
      "56 bits",
      "32 bits"
    ],
    "answer": 0
  },
  {
    "id": 261,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Hash functions",
      "Substitution ciphers",
      "Block cipher"
    ],
    "answer": 1
  },
  {
    "id": 52,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Substitution ciphers",
      "Block cipher",
      "Stream cipher"
    ],
    "answer": 0
  },
  {
    "id": 258,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "TLS",
      "IPSec"
    ],
    "answer": 2
  },
  {
    "id": 203,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits",
      "56, 112, 168 bits"
    ],
    "answer": 1
  },
  {
    "id": 246,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Email",
      "Networks",
      "Databases",
      "Operating systems"
    ],
    "answer": 0
  },
  {
    "id": 25,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "PGP",
      "IPSec",
      "SSH"
    ],
    "answer": 0
  },
  {
    "id": 269,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "ESP",
      "SSL",
      "TLS"
    ],
    "answer": 1
  },
  {
    "id": 230,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "DES",
      "AES",
      "SHA-256"
    ],
    "answer": 3
  },
  {
    "id": 249,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "TLS",
      "SSH",
      "PGP"
    ],
    "answer": 1
  },
  {
    "id": 295,
    "chapter": "Chapter 20: IP Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "SSH",
      "PGP",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 139,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "TLS",
      "SSH",
      "IPSec"
    ],
    "answer": 1
  },
  {
    "id": 54,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Cryptanalysis",
      "Integrity Checking",
      "Confidentiality",
      "Auditability"
    ],
    "answer": 2
  },
  {
    "id": 186,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    "answer": 2
  },
  {
    "id": 185,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Integer factorization",
      "Elliptic curve addition",
      "Discrete logarithm"
    ],
    "answer": 1
  },
  {
    "id": 180,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "One-Time Pad",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 62,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "IEEE 802.11i",
      "IPSec",
      "TLS 1.2"
    ],
    "answer": 1
  },
  {
    "id": 128,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "64 bits",
      "56 bits",
      "128 bits"
    ],
    "answer": 1
  },
  {
    "id": 122,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Cryptanalysis",
      "Integrity Checking",
      "Confidentiality",
      "Auditability"
    ],
    "answer": 2
  },
  {
    "id": 184,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "128, 192, 256 bits",
      "56, 112, 168 bits",
      "32, 64, 128 bits"
    ],
    "answer": 1
  },
  {
    "id": 300,
    "chapter": "Chapter 20: IP Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "ESP",
      "TLS",
      "SSL"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which is a one-way hash function?",
    "options": [
      "AES",
      "SHA-256",
      "DES",
      "RSA"
    ],
    "answer": 1
  },
  {
    "id": 162,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "TLS",
      "IPSec"
    ],
    "answer": 2
  },
  {
    "id": 55,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Elliptic curve addition",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 294,
    "chapter": "Chapter 20: IP Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "64 bits",
      "32 bits",
      "128 bits"
    ],
    "answer": 1
  },
  {
    "id": 155,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "AES",
      "DES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 21,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which is a one-way hash function?",
    "options": [
      "DES",
      "SHA-256",
      "AES",
      "RSA"
    ],
    "answer": 1
  },
  {
    "id": 143,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "ECB",
      "AES",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 111,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "TLS",
      "SSL",
      "AH"
    ],
    "answer": 0
  },
  {
    "id": 158,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Elliptic curve addition",
      "Hash collision",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 267,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "RSA",
      "CBC",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 11,
    "chapter": "Chapter 1: Overview",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "SSH",
      "IPSec",
      "PGP"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "DSA",
      "Diffie-Hellman",
      "RC4",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 273,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.11i",
      "TLS 1.2",
      "IPSec",
      "IEEE 802.1X"
    ],
    "answer": 0
  },
  {
    "id": 8,
    "chapter": "Chapter 1: Overview",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Elliptic curve addition",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 115,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "RC4",
      "Diffie-Hellman",
      "AES",
      "DSA"
    ],
    "answer": 3
  },
  {
    "id": 136,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.11i",
      "TLS 1.2",
      "IPSec",
      "IEEE 802.1X"
    ],
    "answer": 0
  },
  {
    "id": 225,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "DES",
      "SHA-256",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 69,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "CBC",
      "AES",
      "RSA"
    ],
    "answer": 1
  },
  {
    "id": 207,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "TLS",
      "AH",
      "ESP"
    ],
    "answer": 3
  },
  {
    "id": 275,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "32, 64, 128 bits",
      "128, 192, 256 bits",
      "56, 112, 168 bits"
    ],
    "answer": 2
  },
  {
    "id": 91,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Elliptic curve addition",
      "Integer factorization",
      "Discrete logarithm"
    ],
    "answer": 2
  },
  {
    "id": 89,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which is a one-way hash function?",
    "options": [
      "DES",
      "AES",
      "SHA-256",
      "RSA"
    ],
    "answer": 2
  },
  {
    "id": 65,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "SHA-256",
      "DES",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 42,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "One-Time Pad",
      "Vigen\u00e8re Cipher",
      "Rail Fence",
      "Caesar Cipher"
    ],
    "answer": 3
  },
  {
    "id": 18,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "ECB",
      "AES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 17,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "CBC",
      "RSA",
      "ECB"
    ],
    "answer": 1
  },
  {
    "id": 166,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "AH",
      "TLS",
      "SSL",
      "ESP"
    ],
    "answer": 3
  },
  {
    "id": 150,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "SHA-256",
      "AES",
      "DES"
    ],
    "answer": 1
  },
  {
    "id": 3,
    "chapter": "Chapter 1: Overview",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Elliptic curve addition",
      "Discrete logarithm",
      "Hash collision",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 50,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "TLS",
      "SSL",
      "ESP",
      "AH"
    ],
    "answer": 2
  },
  {
    "id": 129,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IPSec",
      "IEEE 802.1X",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 124,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "AES supports which key lengths?",
    "options": [
      "64, 128, 192 bits",
      "56, 112, 168 bits",
      "128, 192, 256 bits",
      "32, 64, 128 bits"
    ],
    "answer": 2
  },
  {
    "id": 145,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "DES",
      "AES",
      "SHA-256"
    ],
    "answer": 3
  },
  {
    "id": 117,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which is a one-way hash function?",
    "options": [
      "AES",
      "RSA",
      "DES",
      "SHA-256"
    ],
    "answer": 3
  },
  {
    "id": 199,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Integrity Checking",
      "Auditability",
      "Cryptanalysis"
    ],
    "answer": 0
  },
  {
    "id": 257,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "64 bits",
      "56 bits",
      "128 bits"
    ],
    "answer": 1
  },
  {
    "id": 135,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IPSec",
      "IEEE 802.1X",
      "TLS 1.2",
      "IEEE 802.11i"
    ],
    "answer": 3
  },
  {
    "id": 220,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "TLS",
      "IPSec"
    ],
    "answer": 2
  },
  {
    "id": 256,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Block cipher",
      "Substitution ciphers",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 99,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "AES supports which key lengths?",
    "options": [
      "128, 192, 256 bits",
      "56, 112, 168 bits",
      "64, 128, 192 bits",
      "32, 64, 128 bits"
    ],
    "answer": 0
  },
  {
    "id": 121,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IEEE 802.11i",
      "IEEE 802.1X",
      "IPSec"
    ],
    "answer": 1
  },
  {
    "id": 216,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "TLS",
      "IPSec"
    ],
    "answer": 2
  },
  {
    "id": 10,
    "chapter": "Chapter 1: Overview",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Email",
      "Networks",
      "Databases",
      "Operating systems"
    ],
    "answer": 0
  },
  {
    "id": 274,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Caesar Cipher",
      "Rail Fence",
      "One-Time Pad",
      "Vigen\u00e8re Cipher"
    ],
    "answer": 0
  },
  {
    "id": 169,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "TLS",
      "IPSec",
      "SSH"
    ],
    "answer": 1
  },
  {
    "id": 235,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "AES supports which key lengths?",
    "options": [
      "56, 112, 168 bits",
      "32, 64, 128 bits",
      "64, 128, 192 bits",
      "128, 192, 256 bits"
    ],
    "answer": 3
  },
  {
    "id": 290,
    "chapter": "Chapter 20: IP Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "SSH",
      "IPSec",
      "PGP"
    ],
    "answer": 0
  },
  {
    "id": 196,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "PGP",
      "IPSec",
      "SSH",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 208,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Elliptic curve addition",
      "Discrete logarithm",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 149,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Rail Fence",
      "Vigen\u00e8re Cipher",
      "Caesar Cipher",
      "One-Time Pad"
    ],
    "answer": 2
  },
  {
    "id": 241,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "56 bits",
      "128 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 276,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "RSA",
      "AES",
      "ECB"
    ],
    "answer": 0
  },
  {
    "id": 237,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "Diffie-Hellman",
      "DSA",
      "RC4",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 297,
    "chapter": "Chapter 20: IP Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "TLS",
      "SSH",
      "PGP"
    ],
    "answer": 1
  },
  {
    "id": 75,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Email",
      "Operating systems",
      "Networks"
    ],
    "answer": 1
  },
  {
    "id": 153,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Integrity Checking",
      "Cryptanalysis"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "ECB",
      "AES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 268,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "ECB",
      "RSA",
      "CBC",
      "AES"
    ],
    "answer": 2
  },
  {
    "id": 238,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "32 bits",
      "64 bits",
      "56 bits"
    ],
    "answer": 2
  },
  {
    "id": 152,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "HMAC is based on?",
    "options": [
      "Block cipher",
      "Stream cipher",
      "Hash functions",
      "Substitution ciphers"
    ],
    "answer": 2
  },
  {
    "id": 260,
    "chapter": "Chapter 18: Wireless Network Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "56 bits",
      "64 bits",
      "32 bits"
    ],
    "answer": 2
  },
  {
    "id": 284,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "AES supports which key lengths?",
    "options": [
      "32, 64, 128 bits",
      "128, 192, 256 bits",
      "64, 128, 192 bits",
      "56, 112, 168 bits"
    ],
    "answer": 1
  },
  {
    "id": 33,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "DSA",
      "Diffie-Hellman",
      "AES",
      "RC4"
    ],
    "answer": 0
  },
  {
    "id": 93,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "RSA",
      "DES",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 228,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "HMAC is based on?",
    "options": [
      "Stream cipher",
      "Substitution ciphers",
      "Hash functions",
      "Block cipher"
    ],
    "answer": 2
  },
  {
    "id": 59,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "TLS",
      "AH",
      "SSL"
    ],
    "answer": 0
  },
  {
    "id": 27,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Networks",
      "Operating systems",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 102,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.1X",
      "IPSec",
      "IEEE 802.11i",
      "TLS 1.2"
    ],
    "answer": 2
  },
  {
    "id": 13,
    "chapter": "Chapter 1: Overview",
    "question": "Which is a one-way hash function?",
    "options": [
      "RSA",
      "SHA-256",
      "AES",
      "DES"
    ],
    "answer": 1
  },
  {
    "id": 280,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "Diffie-Hellman",
      "DSA",
      "AES",
      "RC4"
    ],
    "answer": 1
  },
  {
    "id": 198,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Hash collision",
      "Integer factorization",
      "Elliptic curve addition",
      "Discrete logarithm"
    ],
    "answer": 1
  },
  {
    "id": 177,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "HMAC is based on?",
    "options": [
      "Hash functions",
      "Substitution ciphers",
      "Block cipher",
      "Stream cipher"
    ],
    "answer": 0
  },
  {
    "id": 78,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "RSA",
      "ECB",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 204,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Email",
      "Operating systems",
      "Networks",
      "Databases"
    ],
    "answer": 0
  },
  {
    "id": 175,
    "chapter": "Chapter 12: Message Authentication Codes",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "TLS",
      "PGP",
      "SSH"
    ],
    "answer": 1
  },
  {
    "id": 116,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "PGP",
      "TLS",
      "SSH"
    ],
    "answer": 2
  },
  {
    "id": 95,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IEEE 802.1X",
      "IEEE 802.11i",
      "IPSec"
    ],
    "answer": 2
  },
  {
    "id": 282,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "TLS 1.2",
      "IEEE 802.11i",
      "IPSec",
      "IEEE 802.1X"
    ],
    "answer": 1
  },
  {
    "id": 105,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Vigen\u00e8re Cipher",
      "Rail Fence",
      "Caesar Cipher",
      "One-Time Pad"
    ],
    "answer": 2
  },
  {
    "id": 140,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Hash collision",
      "Integer factorization"
    ],
    "answer": 3
  },
  {
    "id": 41,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "IPSec",
      "PGP",
      "TLS",
      "SSH"
    ],
    "answer": 2
  },
  {
    "id": 88,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Confidentiality",
      "Cryptanalysis",
      "Integrity Checking"
    ],
    "answer": 1
  },
  {
    "id": 35,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Operating systems",
      "Email",
      "Databases",
      "Networks"
    ],
    "answer": 1
  },
  {
    "id": 80,
    "chapter": "Chapter 6: Block Cipher Operation",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "32 bits",
      "128 bits",
      "56 bits"
    ],
    "answer": 0
  },
  {
    "id": 255,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "64 bits",
      "128 bits",
      "32 bits"
    ],
    "answer": 1
  },
  {
    "id": 197,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Networks",
      "Email",
      "Databases",
      "Operating systems"
    ],
    "answer": 1
  },
  {
    "id": 299,
    "chapter": "Chapter 20: IP Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "IPSec",
      "SSH",
      "PGP"
    ],
    "answer": 0
  },
  {
    "id": 12,
    "chapter": "Chapter 1: Overview",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "TLS",
      "ESP",
      "AH",
      "SSL"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "chapter": "Chapter 2: Classical Encryption Techniques",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "RSA",
      "CBC",
      "AES",
      "ECB"
    ],
    "answer": 1
  },
  {
    "id": 38,
    "chapter": "Chapter 3: Block Ciphers and the Data Encryption Standard",
    "question": "HMAC is based on?",
    "options": [
      "Block cipher",
      "Hash functions",
      "Stream cipher",
      "Substitution ciphers"
    ],
    "answer": 1
  },
  {
    "id": 101,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "64 bits",
      "32 bits",
      "56 bits",
      "128 bits"
    ],
    "answer": 0
  },
  {
    "id": 209,
    "chapter": "Chapter 14: Key Management and Distribution",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "32 bits",
      "56 bits",
      "128 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 157,
    "chapter": "Chapter 11: Cryptographic Hash Functions",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Integrity Checking",
      "Auditability",
      "Confidentiality",
      "Cryptanalysis"
    ],
    "answer": 2
  },
  {
    "id": 279,
    "chapter": "Chapter 19: Electronic Mail Security",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Confidentiality",
      "Integrity Checking",
      "Auditability",
      "Cryptanalysis"
    ],
    "answer": 0
  },
  {
    "id": 236,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Networks",
      "Databases",
      "Operating systems",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 190,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Auditability",
      "Integrity Checking",
      "Confidentiality",
      "Cryptanalysis"
    ],
    "answer": 2
  },
  {
    "id": 68,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which wireless security standard introduced WPA2?",
    "options": [
      "IEEE 802.11i",
      "IPSec",
      "IEEE 802.1X",
      "TLS 1.2"
    ],
    "answer": 0
  },
  {
    "id": 138,
    "chapter": "Chapter 10: Other Public-Key Cryptosystems",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "56 bits",
      "128 bits",
      "32 bits",
      "64 bits"
    ],
    "answer": 3
  },
  {
    "id": 234,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "RSA security relies on the difficulty of?",
    "options": [
      "Discrete logarithm",
      "Elliptic curve addition",
      "Integer factorization",
      "Hash collision"
    ],
    "answer": 2
  },
  {
    "id": 96,
    "chapter": "Chapter 7: Random Number Generation",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "SSL",
      "AH",
      "ESP",
      "TLS"
    ],
    "answer": 2
  },
  {
    "id": 58,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "RSA",
      "DES",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 181,
    "chapter": "Chapter 13: Digital Signatures",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "RSA",
      "AES",
      "DES"
    ],
    "answer": 0
  },
  {
    "id": 233,
    "chapter": "Chapter 16: Network Access Control and Cloud Security",
    "question": "HMAC is based on?",
    "options": [
      "Substitution ciphers",
      "Stream cipher",
      "Block cipher",
      "Hash functions"
    ],
    "answer": 3
  },
  {
    "id": 287,
    "chapter": "Chapter 20: IP Security",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "RC4",
      "Diffie-Hellman",
      "AES",
      "DSA"
    ],
    "answer": 3
  },
  {
    "id": 114,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "Diffie-Hellman",
      "DSA",
      "RC4",
      "AES"
    ],
    "answer": 1
  },
  {
    "id": 243,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "TLS",
      "IPSec",
      "PGP",
      "SSH"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "chapter": "Chapter 4: Number Theory and Finite Fields",
    "question": "PGP is primarily used for securing?",
    "options": [
      "Databases",
      "Networks",
      "Operating systems",
      "Email"
    ],
    "answer": 3
  },
  {
    "id": 211,
    "chapter": "Chapter 15: User Authentication",
    "question": "Which digital signature algorithm is endorsed by NIST?",
    "options": [
      "DSA",
      "AES",
      "Diffie-Hellman",
      "RC4"
    ],
    "answer": 0
  },
  {
    "id": 67,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which protocol provides transport layer security?",
    "options": [
      "SSH",
      "PGP",
      "IPSec",
      "TLS"
    ],
    "answer": 3
  },
  {
    "id": 5,
    "chapter": "Chapter 1: Overview",
    "question": "Which is a one-way hash function?",
    "options": [
      "SHA-256",
      "DES",
      "RSA",
      "AES"
    ],
    "answer": 0
  },
  {
    "id": 134,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "AES",
      "RSA",
      "ECB",
      "CBC"
    ],
    "answer": 3
  },
  {
    "id": 252,
    "chapter": "Chapter 17: Transport-Level Security",
    "question": "Which IPsec protocol provides confidentiality?",
    "options": [
      "ESP",
      "TLS",
      "SSL",
      "AH"
    ],
    "answer": 0
  },
  {
    "id": 125,
    "chapter": "Chapter 9: RSA and ECC",
    "question": "Which of the following is part of the CIA triad?",
    "options": [
      "Cryptanalysis",
      "Integrity Checking",
      "Auditability",
      "Confidentiality"
    ],
    "answer": 3
  },
  {
    "id": 2,
    "chapter": "Chapter 1: Overview",
    "question": "DES uses a block size of how many bits?",
    "options": [
      "128 bits",
      "64 bits",
      "32 bits",
      "56 bits"
    ],
    "answer": 1
  },
  {
    "id": 113,
    "chapter": "Chapter 8: Public-Key Cryptography",
    "question": "Which mode of operation requires an initialization vector (IV)?",
    "options": [
      "CBC",
      "ECB",
      "AES",
      "RSA"
    ],
    "answer": 0
  },
  {
    "id": 64,
    "chapter": "Chapter 5: Advanced Encryption Standard",
    "question": "Which cipher is an example of a substitution technique?",
    "options": [
      "Caesar Cipher",
      "One-Time Pad",
      "Rail Fence",
      "Vigen\u00e8re Cipher"
    ],
    "answer": 0
  }

]