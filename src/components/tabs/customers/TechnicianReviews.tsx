import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import type {Engineer} from "../types/engineer";

interface TechnicianReviewsProps {
    engineer : Engineer;
}

function TechnicianReviews({engineer} : TechnicianReviewsProps) {

    const reviews = engineer.reviews;

    return(
        <div className="grid grid-row-2 gap-7 mt-10 mb-10 mr-10">
            {reviews.map((review) => (
            <Card index={review.reviewer} className="w-full h-[125px] px-3 bg-[#D9D9D9]/20 rounded-[20px] !border-0 !ring-0 shadow-glassy-jeri [--glassy-color:58_207_152] inset-shadow-sm inset-ring-black">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <h1 className="text-[24px] font-bold text-[#FFFFFF] font-ubuntu-mono opacity-80 tracking-[0.05em] leading-[100%]">
                            {review.reviewer}
                        </h1>
                        <div className="flex gap-3 items-center justify-center">
                            <span className="text-[30px] text-yellow-500">
                                 {"★".repeat(Math.round(review.rating))}
                            </span>
                            <p className="text-[16px] font-regular text-[#FFFFFF]/60 tracking-[0.05em] leading-[100%]">
                                {review.date}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[18px] font-ubuntu-mono text-[#FFFFFF] font-light italic opacity-80 tracking-[0.05em] leading-[100%]">
                            "{review.comment}"
                        </p>
                    </div>
                </div>
            </Card>
            ))}
        </div>
    )
}

export default TechnicianReviews;