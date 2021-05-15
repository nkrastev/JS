function solve(worker){

    if (worker.dizziness===true) {
        let amountNeeded=0.1*worker.weight*worker.experience;
        worker.levelOfHydrated+=amountNeeded;
        worker.dizziness=false;
    }

    return worker;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: false }
  ));

  let arr=[];
  console.log(arr[-1]);