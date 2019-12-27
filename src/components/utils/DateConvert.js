export function DateConvert(dateInput) {
    var dateConvert = new Date(dateInput);
    var date = dateConvert.getFullYear() + '-' + (dateConvert.getMonth() + 1) + '-' + dateConvert.getDate();
    var time = dateConvert.getHours() + ":" + dateConvert.getMinutes() + ":" + dateConvert.getSeconds();
    return date + ' ' + time;
}