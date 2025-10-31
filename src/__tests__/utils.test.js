// Your tests here
import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("returns true if word is a palindrome", () => {
        const word = "racecar";

        const f = isPalindrome(word)
        expect(f).toBe(true);
    })
})