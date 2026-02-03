import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

const cards = [
    {
        icon: Phone,
        title: "Phone",
        desc: `+20 123 456 7890
        +20 098 765 4321`,
    },
    {
        icon: Mail,
        title: "Email",
        desc: `info@arqamedical.com
                sales@arqamedical.com`,
    },
    {
        icon: MapPin,
        title: "Address",
        desc: `123 Medical District
        Cairo, Egypt
        Postal Code: 12345`,
    },
    {
        icon: Clock,
        title: "Business Hours",
        desc: `Monday - Friday: 9:00 AM - 6:00 PM
        Saturday: 10:00 AM - 3:00 PM
        Sunday: Closed`,
    },
];

const page = () => {
    return (
        <>
            {/* Header of Contact us */}
            <div className="w-full text-white bg-linear-to-t from-dark-primary to-myprimary section-padding flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                    <h1 className="section-title text-white">Contact Us</h1>
                    <p className="header-subtitle text-white/90">Get in touch with our team for inquiries, quotes, or support</p>
                </div>
            </div>



            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between section-padding pt-0 gap-6 md:gap-8">
                {/* Contacts */}
                <div className="flex flex-col h-full w-full md:max-w-[40%] gap-3 md:gap-6">

                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-row items-center w-full border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200 bg-white gap-2 p-6 md:p-8">
                            <div className="flex items-center justify-start w-full">
                                <div className="bg-myprimary/30 rounded-full text-dark-primary my-1 md:my-2 mr-5 p-3">
                                    <item.icon width={36} height={36} />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-body whitespace-pre-line">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Form */}
                <form className="border-2 rounded-2xl p-6 md:p-8 bg-white shadow-sm w-full">
                    <FieldSet>
                        <FieldLegend className="card-title text-gray-800 text-lg md:text-xl">
                            <span className="card-title"> Send us a Message </span>
                        </FieldLegend>

                        <FieldDescription className="card-body mt-1">
                            Request a Quote or Send us a Message
                        </FieldDescription>

                        <FieldGroup className="space-y-4">

                            {/* Name - Required */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="name" className="form-title text-gray-800">
                                    Full name<span className="text-red-600 font-bold">*</span>
                                </FieldLabel>
                                <Input
                                    id="name"
                                    required
                                    autoComplete="off"
                                    placeholder="Your name"
                                    className="md:text-lg border-2 px-4 py-5"
                                />
                            </Field>

                            {/* Company */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="company" className="form-title text-gray-800">
                                    Company / Facility
                                </FieldLabel>
                                <Input
                                    id="company"
                                    autoComplete="off"
                                    placeholder="Your organization"
                                    className="md:text-lg border-2 px-4 py-5"
                                />
                            </Field>

                            {/* Email - Required */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="email" className="form-title text-gray-800">
                                    Email Address <span className="text-red-600 font-bold">*</span>
                                </FieldLabel>
                                <Input
                                    id="email"
                                    required
                                    autoComplete="off"
                                    placeholder="your@email.com"
                                    className="md:text-lg border-2 px-4 py-5"
                                />
                            </Field>

                            {/* Phone */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="phone" className="form-title text-gray-800">
                                    Phone Number / Whatsapp Number
                                </FieldLabel>
                                <Input
                                    id="phone"
                                    autoComplete="off"
                                    placeholder="+20 123 456 789"
                                    className="md:text-lg border-2 px-4 py-5"
                                />
                            </Field>

                            {/* Feedback */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="feedback" className="form-title text-gray-800">
                                    Message<span className="text-red-600 font-bold">*</span>
                                </FieldLabel>
                                <Textarea
                                    id="feedback"
                                    required

                                    placeholder="Tell us about your requirements..."
                                    className="md:text-lg border-2 px-4 py-4 h-30"
                                />
                            </Field>

                            {/* Button */}
                            <div>
                                <Button type="submit" className="w-full md:py-6 bg-myprimary hover:bg-dark-primary/90 md:text-lg">  Send Message </Button>
                            </div>

                        </FieldGroup>
                    </FieldSet>
                </form>
            </div >
            {/* Map location */}
            <div className="container mx-auto section-padding pt-0">
                <h1 className="section-title mb-8">
                    Our Company Location
                </h1>

                <Card className="w-full py-0 max-h-[500px]">
                    <CardContent className="p-0">
                        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps?q=30.1865406,31.4832249&t=k&z=17&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </CardContent>
                </Card>


            </div>

        </>
    )
}
export default page