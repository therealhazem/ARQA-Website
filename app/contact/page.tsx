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
            <div className="w-full text-white font-poppins bg-linear-to-t from-dark-primary to-myprimary
                    flex items-center justify-center p-4 mb-8">
                <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">Contact Us</h1>
                    <h2 className="text-white/90 xl:text-xl">Get in touch with our team for inquiries, quotes, or support</h2>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-3 md:gap-6">
                {/* Contacts */}
                <div className="flex flex-col h-full w-full md:max-w-[40%] gap-3 md:gap-6">

                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-row items-center w-full border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200 bg-white gap-2 p-[7%]">
                            <div className="flex items-center justify-start w-full">
                                <div className="bg-myprimary/30 rounded-full text-dark-primary my-1 md:my-2 mr-5 p-3">
                                    <item.icon width={36} height={36} />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <h1 className="font-semibold text-lg lg:text-xl">{item.title}</h1>
                                    <h2 className="text-gray-500 lg:text-lg whitespace-pre-line">{item.desc}</h2>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* Form */}
                <form className="border-2 rounded-2xl p-6 md:p-8 bg-white shadow-sm w-full">
                    <FieldSet>
                        <FieldLegend className="font-bold text-gray-800">
                            <span className="text-lg md:text-2xl">Send us a Message</span>
                        </FieldLegend>

                        <FieldDescription className="text-gray-600 md:text-lg mt-">
                            Request a Quote or Send us a Message
                        </FieldDescription>

                        <FieldGroup className=" space-y-4 text-lg md:text-xl">

                            {/* Name - Required */}
                            <Field className="m-0">
                                <FieldLabel htmlFor="name" className="font-semibold md:text-lg text-gray-800">
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
                                <FieldLabel htmlFor="company" className="font-semibold md:text-lg text-gray-800">
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
                                <FieldLabel htmlFor="email" className="font-semibold md:text-lg text-gray-800">
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
                                <FieldLabel htmlFor="phone" className="font-semibold md:text-lg text-gray-800">
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
                                <FieldLabel htmlFor="feedback" className="font-semibold md:text-lg text-gray-800">
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
            <div className="container mx-auto px-4 pt-4 md:pt-8">
                <Card className="w-full py-0  max-h-[500px]">
                    <CardContent className="p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137463.74448205373!2d31.349171205604378!3d30.226619646500733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581ab73d4ca47d%3A0x89e1c92d1d007f67!2sAl%20Obour%20City%2C%20Obour%2C%20Al-Qalyubia%20Governorate!5e1!3m2!1sen!2seg!4v1768028556545!5m2!1sen!2seg"
                            className="w-full h-[300px] md:h-[400px] rounded-lg"
                            loading="lazy"
                        />
                    </CardContent>
                </Card>
            </div>

        </>
    )
}
export default page