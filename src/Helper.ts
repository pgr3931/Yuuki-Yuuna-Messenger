const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
}

export const endAngles = [172, 173.5, 174.5, 175.3];
export const durations = [405, 413, 412, 395];
export const lengths = [421, 534, 647, 760];
export const timeouts = [0, 4000, 7500, 11700]
export const colorSet = {
    'blue': ['#B0DEEF', '#3485F2'],
    'green': ['#C8FCBF', '#6DEA39'],
    'red': ['#E6A7D3', '#ED64B3'],
    'yellow': ['#FAF0BB', '#F0DD52']
}