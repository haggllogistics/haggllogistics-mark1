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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RefreshCcw, CirclePlus, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { useState, useRef, useEffect } from "react";

interface LoadQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoadQuoteModal({ open, onOpenChange }: LoadQuoteModalProps) {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(now);
  const [timeNote, setTimeNote] = useState<string>("");
  const truckNeededInputRef = useRef<HTMLInputElement>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Update the Truck Needed input field whenever date, hour or note changes
  useEffect(() => {
    if (!truckNeededInputRef.current) return;

    const datePart = format(selectedDate, "dd MMM yyyy");
    const hourPart = format(selectedDate, "hh a");
    const base = `${datePart} | ${hourPart}`;

    const finalValue = timeNote.trim() ? `${timeNote.trim()} | ${base}` : base;

    truckNeededInputRef.current.value = finalValue;
  }, [selectedDate, timeNote]);

  // Disable past dates (before today)
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Check if selected date is today
  const isToday = (date: Date) => {
    return format(date, "yyyy-MM-dd") === format(now, "yyyy-MM-dd");
  };

  // Disable past hours when today is selected
  const isPastHour = (hour: number) => {
    if (!isToday(selectedDate)) return false;
    return hour <= now.getHours();
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date || isPastDate(date)) return;
    setSelectedDate(date);
  };

  const handleHourChange = (hourStr: string) => {
    const hour = parseInt(hourStr);
    if (isPastHour(hour)) return;

    const newDate = new Date(selectedDate);
    newDate.setHours(hour);
    setSelectedDate(newDate);
  };

  const handlePopoverOpenChange = (open: boolean) => {
    setIsPopoverOpen(open);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const postTime = new Date();
    const dateStr = postTime.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const timeStr = postTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const formattedDateTime = `${dateStr} | ${timeStr}`;

    const message = encodeURIComponent(
      `Ⓗ *HAGGL Logistics — Load*\n${formattedDateTime}\n───────────────────\n` +
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
    setSelectedDate(now);
    setTimeNote("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        ref={dialogContentRef}
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
      >
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

            {/* Approx Weight (optional) */}
            <div>
              <Label htmlFor="weight">Approx Weight (optional)</Label>
              <Input id="weight" name="weight" placeholder="3.5 – 5 Tons" />
            </div>

            {/* Truck Needed - Past dates & hours disabled */}
            <div>
              <Label className="flex items-center gap-2">
                Truck Needed
                <Popover open={isPopoverOpen} onOpenChange={handlePopoverOpenChange}>
                  <PopoverTrigger asChild>
                    <Button
                      ref={triggerRef}
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0"
                    >
                      <CalendarDays className="h-4 w-4" />
                      <span className="sr-only">Set date and time preference</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-80 p-4"
                    align="center"
                    side="top"
                    sideOffset={0}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-40%, -50%)',
                      zIndex: 50,
                    }}
                  >
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={isPastDate}
                      initialFocus
                    />

                    <div className="mt-4 space-y-3">
                      <div>
                        <Label className="text-sm">Preferred Hour</Label>
                        <Select
                          value={selectedDate.getHours().toString().padStart(2, "0")}
                          onValueChange={handleHourChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select hour" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => {
                              const hourStr = i.toString().padStart(2, "0");
                              const disabled = isPastHour(i);
                              return (
                                <SelectItem
                                  key={i}
                                  value={hourStr}
                                  disabled={disabled}
                                >
                                  {format(new Date().setHours(i), "hh a")}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="time-note" className="text-sm">
                          Additional Note (optional)
                        </Label>
                        <Textarea
                          id="time-note"
                          placeholder="e.g., after 6PM, evening only, urgent morning"
                          rows={2}
                          value={timeNote}
                          onChange={(e) => setTimeNote(e.target.value)}
                          className="resize-none text-sm"
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </Label>
              <Input
                ref={truckNeededInputRef}
                id="truckNeeded"
                name="truckNeeded"
                placeholder="e.g., after 6PM | 18 Dec 2025 | 08 PM"
                readOnly
                className="cursor-default"
              />
            </div>

            {/* Contact Number */}
            <div>
              <Label htmlFor="contact">Contact Number</Label>
              <Input id="contact" name="contact" placeholder="+919442602793" required />
            </div>

            {/* Message (optional) */}
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Any other instructions..."
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-4">
            <p className="text-xs text-muted-foreground order-2 sm:order-1">
              Get Quotes after posting immediately
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