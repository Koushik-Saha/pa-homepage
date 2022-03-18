import dayjs from "dayjs";

export const differentFormatDateTime = (datetime) => {
    let foundedFormatDayJS = new Date(dayjs(datetime).format())
    let formatDayJS = new Date(dayjs(new Date()).format())

    const diffTime = Math.abs(formatDayJS - foundedFormatDayJS);

    return Math.ceil(diffTime / (1000 * 60 * 60));
};

