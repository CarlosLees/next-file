'use client';

import HomeCard from '@/components/typeList/homeCard/HomeCard';

const TypeList = () => {
    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <HomeCard
                imageUrl="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant Meeting"
                handleClick={() => {}}
                className="bg-orange-400"
            />
            {/* <HomeCard */}
            {/*    imageUrl="/icons/schedule.svg" */}
            {/*    title="Schedule Meeting" */}
            {/*    description="Plan your meeting" */}
            {/*    handleClick={() => {}} */}
            {/*    className="bg-blue-400" */}
            {/* /> */}
            {/* <HomeCard */}
            {/*    imageUrl="/icons/recordings.svg" */}
            {/*    title="View Recordings" */}
            {/*    description="Start an instant Meeting" */}
            {/*    handleClick={() => {}} */}
            {/*    className="bg-purple-400" */}
            {/* /> */}
            {/* <HomeCard */}
            {/*    imageUrl="/icons/join-meeting.svg" */}
            {/*    title="Join Meeting" */}
            {/*    description="via invitation link" */}
            {/*    handleClick={() => {}} */}
            {/*    className="bg-yellow-400" */}
            {/* /> */}

            {/* <MeetingModal */}
            {/*    isOpen={modalOpen} */}
            {/*    onClose={() => {}} */}
            {/*    title="Type the link here" */}
            {/*    className="text-center" */}
            {/*    buttonText="Join Meeting" */}
            {/*    handleClick={() => { */}
            {/*        router.push('/'); */}
            {/*    }} */}
            {/* /> */}
        </section>
    );
};

export default TypeList;
