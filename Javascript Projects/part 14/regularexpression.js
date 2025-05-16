// Regular Expressions Cheat Sheet
// | Regex | Meaning | Example Match |
// | \d | Matches any digit (0-9) | "abc123" → 1 2 3 |
// | \D | Matches any non-digit | "abc123" → abc |
// | \w | Matches any word character (a-z, A-Z, 0-9, _) | "Hello_123" → Hello_123 |
// | \W | Matches any non-word character | "Hello@123" → @ |
// | \s | Matches any whitespace (space, tab, newline) | "Hello  World" → (space) |
// | \S | Matches any non-whitespace | "Hello  World" → HelloWorld |
// | . | Matches any character except newline | "Hello" → H e l l o |
// | ^ | Matches the beginning of a string | ^Hello → "Hello World" ✅ "World Hello" ❌ |
// | $ | Matches the end of a string | world$ → "Hello world" ✅ "world hello" ❌ |
// | * | Matches zero or more occurrences | "Hellooo" → H ello oo o |
// | + | Matches one or more occurrences | "Hellooo" → H e l lo oo |
// | ? | Matches zero or one occurrence | "color" vs "colour" → colou?r ✅ |
// | {n} | Matches exactly n times | "aaa" → a{3} ✅ "aa" ❌ |
// | {n,} | Matches at least n times | "aaaaa" → a{2,} ✅ |
// | {n,m} | Matches between n and m times | "aaa" → a{1,2} ✅ "aaa" ❌ |
// | | | Acts as OR between patterns | "cat" or "dog" → cat|dog ✅ |
// | [abc] | Matches any one of the characters inside brackets | "apple" → a "banana" → b |
// | [^abc] | Matches any character NOT inside brackets | "apple" → p l e |
// | (?:...) | Non-capturing group, useful for grouping but ignoring matches | "hello123" → (?:hello) ✅ |
// | (?=...) | Lookahead (matches something ahead in the string) | "hello123" → h(?=e) ✅ |
// | (?<=...) | Lookbehind (matches something behind) | "hello123" → (?<=h)e ✅ |


// Example in Code:
// const text = "My phone number is 123-456-7890";
// const regex = /\d{3}-\d{3}-\d{4}/;
// console.log(text.match(regex));
// Output: ["123-456-7890"]
// Absolutely! Here are a few real-world situations where regex can be super useful:
// - Validating user input 🔍
// - Checking if an email format is correct: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
// - Ensuring a password meets complexity rules (like including uppercase, numbers, and special characters).
// - Extracting data from text 🧐
// - Pulling all phone numbers from a document: /\d{3}-\d{3}-\d{4}/
// - Extracting hashtags from social media posts: /#[\w]+/
// - Replacing or cleaning up messy text ✨
// - Removing extra spaces from user input: text.replace(/\s+/g, " ")
// - Standardizing file names by replacing spaces with underscores.
// - Web scraping & data manipulation 🌐
// - Extracting URLs from a webpage: /https?:\/\/[^\s]+/
// - Finding all dates in a document: /\d{4}-\d{2}-\d{2}/ (for YYYY-MM-DD format).
// You don’t need to memorize regex patterns—just remember these situations where regex is useful, and look up the exact pattern when needed. 


