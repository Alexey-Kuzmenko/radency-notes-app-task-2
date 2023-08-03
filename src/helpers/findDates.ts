export const findDates = (noteContent: string): Array<RegExpMatchArray> | Array<string> => {
    const dateRegex = /\b(?:\d{1,2}\/\d{1,2}\/\d{4}|\w+\s\d{1,2},\s\d{4})\b/g;
    const match = noteContent.match(dateRegex);

    if (match) {
        return match;
    } else {
        return [];
    }
};


const test = findDates('Lorem impuls, qyertfhhg 15.05.2023');
console.log(test);
