import bg from '/src/assets/banner.png'

export default function Content() {
    return (
        <img
            src={bg}
            alt="Game isometric scene"
            className="absolute inset-0 h-full w-full object-cover"
        />
    )
}