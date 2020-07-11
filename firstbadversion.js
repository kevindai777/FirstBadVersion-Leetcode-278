//Objective is to find the first bad version of a file, knowing that all versions 
//after it are also bad


//Design of a function that will find the lowest index that a value can be inserted in

class BadVersion {
    constructor(value) {
        this.bad = value 
    }

    isBadVersion(value) {
        if (value < this.bad) {
            return false
        }

        return true
    }

    find(value) {
        let low = 1
        let high = value
        
        while (low < high) {
            let mid = Math.floor((low + high) / 2)
            
            if (this.isBadVersion(mid)) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        
        return low
    }
}

let bad = new BadVersion(5)
bad.find(6)