import slateInfo from '../data/slateInfo'

export function createLineup(id){
  let lineup = {
    id: id,
    salary: slateInfo.classic.CFB.salary,
    roster: slateInfo.classic.CFB.roster,
    positions: slateInfo.classic.CFB.positions
  }
  return lineup;
}

export function createLineups(num){
  let lid = 1
  let createdLineups = []
  while(lid <= num){
    createdLineups.push(createLineup(lid))
    lid ++
  }
  return createdLineups
}


export default{
  createLineup,
  createLineups
}