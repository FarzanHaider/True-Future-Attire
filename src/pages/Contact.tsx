import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/FadeInSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Hook up to backend/email service
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Optional Logo */}
        <div className="flex justify-center mb-12">
          <img src="/logo-true-future.png" alt="True Future Attire" className="h-12 opacity-90" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* FAQ Section */}
          <FadeInSection direction="left">
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I return an item?</AccordionTrigger>
                  <AccordionContent>
                    To return an item, contact our support team within the return period.
                    Ensure the product is unused, in original packaging, and includes all tags.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship worldwide with reliable couriers. Delivery times vary by region.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Once your order is shipped, you’ll receive a tracking number by email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeInSection>

          {/* Contact Form Section */}
          <FadeInSection direction="right" delay={0.2}>
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;;
