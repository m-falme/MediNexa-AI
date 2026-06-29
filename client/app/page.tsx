import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background">
      <h1 className="text-5xl font-bold text-primary">
        Welcome to MediNexa AI
      </h1>

      <p className="text-muted text-lg">
        AI-Powered Healthcare for Everyone
      </p>

      <div className="flex gap-4">
        <Button variant="primary">
          Get Started
        </Button>

        <Button variant="secondary">
          Learn More
        </Button>

        <Button variant="outline">
          Contact Us
        </Button>
      </div>

      <Button loading>
        Loading
      </Button>
    </main>
  );
}