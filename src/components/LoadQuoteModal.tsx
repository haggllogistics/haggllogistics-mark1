import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RefreshCcw, CirclePlus } from "lucide-react";

interface LoadQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoadQuoteModal({ open, onOpenChange }: LoadQuoteModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const now = new Date();

    const date = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const time = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formattedDateTime = `${date} | ${time}`;

    const message = encodeURIComponent(`Ⓗ *HAGGL Logistics — Load*
${formattedDateTime}
───────────────────\n` +
      `- *From:* ${data.from || "Not specified"}\n` +
      `- *To:* ${data.to || "Not specified"}\n` +
      `- *Material:* ${data.material || "Not specified"}\n` +
      `- *Vehicle:* ${data.vehicle || "Optional"}\n` +
      `- *Body Type:* ${data.bodyType || "Not specified"}\n` +
      `- *Approx Weight:* ${data.weight || "Not specified"}\n` +
      `- *Truck Needed:* ${data.truckNeeded || "Not specified"}\n` +
      `- *Contact:* ${data.contact || "Not specified"}\n` +
      `- *Message:* ${data.message || "None"}`
    );

    window.open(`https://wa.me/919442602793?text=${message}`, "_blank");
    onOpenChange(false);
  };

  const handleReset = () => {
    (document.getElementById("load-quote-form") as HTMLFormElement)?.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-bold">Create New Load</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Fill the details and publish
              </DialogDescription>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCcw className="h-3.5 w-3.5 mr-1.5" />
              Reset
            </Button>
          </div>
        </DialogHeader>

        <form id="load-quote-form" onSubmit={handleSubmit} className="py-4 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* From */}
            <div>
              <Label htmlFor="from">From</Label>
              <Input id="from" name="from" placeholder="Madurai" required />
            </div>

            {/* To */}
            <div>
              <Label htmlFor="to">To</Label>
              <Input id="to" name="to" placeholder="Bangalore" required />
            </div>

            {/* Material */}
            <div>
              <Label htmlFor="material">Material</Label>
              <Input id="material" name="material" placeholder="Textiles" required />
            </div>

            {/* Vehicle (optional) */}
            <div>
              <Label htmlFor="vehicle">Vehicle (optional)</Label>
              <Input id="vehicle" name="vehicle" placeholder="19ft / 6W" />
            </div>

            {/* Body Type */}
            <div>
              <Label htmlFor="bodyType">Body Type</Label>
              <Select name="bodyType" defaultValue="Closed">
                <SelectTrigger>
                  <SelectValue placeholder="Select body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Closed">Closed</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Tanker">Tanker</SelectItem>
                  <SelectItem value="Tipper">Tipper</SelectItem>
                  <SelectItem value="Flatbed">Flatbed</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rate */}
            <div>
              <Label>Rate</Label>
              <div className="grid grid-cols-[1fr_120px] gap-2">
                <Input type="number" name="rate" placeholder="22" min="0" />
                <Select name="rateUnit" defaultValue="per_km">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="per_km">₹/km</SelectItem>
                    <SelectItem value="per_ton">₹/ton</SelectItem>
                    <SelectItem value="lump_sum">Lumpsum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Approx Weight */}
            <div>
              <Label htmlFor="weight">Approx Weight (optional)</Label>
              <Input id="weight" name="weight" placeholder="3.5 – 5 Tons" />
            </div>

            {/* Truck Needed */}
            <div>
              <Label htmlFor="truckNeeded">Truck Needed</Label>
              <Input id="truckNeeded" name="truckNeeded" placeholder="Today night" />
            </div>

            {/* Contact Number */}
            <div>
              <Label htmlFor="contact">Contact Number</Label>
              <Input id="contact" name="contact" placeholder="+919442602793" required />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Call me after 6PM..."
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
            <p className="text-xs text-muted-foreground order-2 sm:order-1">
              New post will go live immediately
            </p>
            <Button type="submit" className="order-1 sm:order-2 bg-accent hover:bg-accent/90">
              <CirclePlus className="h-4 w-4 mr-1.5" />
              Publish Load
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}