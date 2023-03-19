export default function StarsInfo(props) {
    const { results } = props;
    console.log(results.lenght);
    if (results.length > 0) {
        return <div className="container text-white mt-3">
            <ul style={{listStyle:'none'}}>
                <li>The distance from the Earth is measured in light years. A light year equals to 5.88 trillion miles 🤯</li>
                <li>The magnitude is used to measure the brightness of a star 🌟</li>
                <li>Stars can also be classified by their spectra (the elements that they absorb). The 7 spectrl classes are OBAFGKM where O stars are the hottest and each successive class is cooler with M being the coolest stars.</li>
            </ul>
        </div>
    }
    
}