interface VideoProps {
    src: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
    return (
        <video className='video' controls={true}>
            <source src={src} />
        </video>
    )
}

export default Video