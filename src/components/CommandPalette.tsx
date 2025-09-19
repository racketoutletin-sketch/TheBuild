import { useState, useEffect } from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search, ExternalLink, Mail, Phone, Code2, Sparkles } from "lucide-react";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands = [
    {
      group: "Navigation",
      items: [
        { name: "Home", action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }), icon: Code2 },
        { name: "Services", action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), icon: Sparkles },
        { name: "Portfolio", action: () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), icon: ExternalLink },
        { name: "Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), icon: Mail },
      ]
    },
    {
      group: "Actions",
      items: [
        { name: "Start Project", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), icon: Sparkles },
        { name: "Email Us", action: () => window.open("mailto:hello@thebuild.com"), icon: Mail },
        { name: "Call Us", action: () => window.open("tel:+15551234567"), icon: Phone },
        { name: "View GitHub", action: () => window.open("https://github.com"), icon: ExternalLink },
      ]
    }
  ];

  const handleCommand = (action: () => void) => {
    action();
    setOpen(false);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 glass px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-foreground transition-smooth"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commands.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => handleCommand(item.action)}
                  className="flex items-center gap-3"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandPalette;