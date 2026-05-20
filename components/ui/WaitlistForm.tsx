"use client";

import { Button } from "./index";

export default function WaitlistForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="flex-1 bg-shell-salt border border-shell-limestone px-4 py-3 rounded-full font-body text-sm focus-visible:outline-2 focus-visible:outline-shell-gold focus-visible:outline-offset-2"
        required
      />
      <Button variant="primary" type="submit">Join</Button>
    </form>
  );
}
