# 🔣 | Encryption Methods

I learnt a lot about encryption methods because my sister and I wanted to have a secret "language". I created notes and learnt more about the Vigenère-Cipher.

## 📝 | Note Transcription

`notes.jpeg` transcription:
```
1. Caesar-Verschlüsselung  
   - Buchstaben werden um eine feste Anzahl Stellen im Alphabet verschoben.  
   - Beispiel: A wird zu D (Schlüssel „3“).  
   - Pro: Einfach und schnell  
   - Contra: Leicht zu knacken

2. Vigenère-Verschlüsselung  
   - Verwendung eines Schlüsselwortes zur Verschiebung der Buchstaben.  
   - Jeder Buchstabe des Textes wird unterschiedlich verschoben.  
   - Pro: Komplexer als Caesar  
   - Contra: Schlüsselwort kann erraten werden

3. Skytale (Stab-Verschlüsselung)  
   - Text auf Band schreiben und um einen Stab wickeln.  
   - Empfänger benötigt Stab mit gleichem Durchmesser.  
   - Pro: Einfach und keine Mathematik nötig  
   - Contra: Leicht zu entschlüsseln, wenn der Stabdurchmesser bekannt ist  
   - Beispiel: Nachricht auf einem Papierstreifen, um einen Stift wickeln.

4. Substitution  
   - Jeder Buchstabe wird durch ein anderes Symbol, eine Zahl oder einen anderen Buchstaben ersetzt.  
   - Beispiel: A wird zu %, B zu 5, C zu @.  
   - Pro: Kann sicher sein  
   - Contra: Wenn der Schlüssel bekannt ist, einfach zu entschlüsseln

5. Polybius-Quadrat  
   - 5x5-Gitter für Buchstaben (ohne „J“).  
   - Buchstaben werden durch Koordinaten im Gitter ersetzt.  
   - Pro: Einfach zu lernen  
   - Contra: Durch Häufigkeitsanalyse knackbar  

6. Pigpen-Chiffre  
   - Buchstaben werden durch Symbole in einem Gitter ersetzt.  
   - Pro: Visuell und schwerer zu erraten  
   - Contra: Bekannt, daher leicht zu entschlüsseln  

7. Transpositions-Chiffre  
   - Buchstaben werden nach einem bestimmten Muster vertauscht.  
   - Pro: Sicher bei guter Implementierung  
   - Contra: Kenntnis des Schlüssels erforderlich
```

## ⭐️ | Own Encryption

I decided to use one of the listed encryption methods with my sister for fun. We decided to use the [Vigenère-Cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) encryption method but simplified it.

If you're interested, instead of using all the letters from the alphabet, we instead used numbers from 0 to 9.

Check `table.jpeg` to see the table.

##  🕹️ | Example

Secret Number Code: 1234
Plain Text: "Hello"

```
H -> I (shift letters by 1)
e -> g (shift letters by 2)
l -> o (shift letters by 3)
l -> p (shift letters by 4)
o -> p (shift letters by 1 again)
```

"Hello" -> "Igopp"
Ciphertext: "Igopp"

## 🖥️ | Python Script

I created a Python script that can encrypt and decrypt messages with a key. Check out `main.py`!

## ❓ | Questions

If you have any questions please ask it in my DMs on the Hackclub Slack (where you probably came from) or add me on Discord: @nikitafrfr

Thanks for reading!