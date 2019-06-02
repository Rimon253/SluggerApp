function slugger(args){
    let wordArray = args.split(' ');
    let res = '';
    wordArray.forEach(word => {
        res+=  word +'-';
    });
    return res.substring(0,res.length - 1);
}

module.exports = slugger