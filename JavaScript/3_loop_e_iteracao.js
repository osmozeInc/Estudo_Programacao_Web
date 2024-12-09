



/* DECLARAÇÃO LABEL

Um label provê um identificador que permite que este seja referenciado em outro lugar no seu programa. Por exemplo, você pode usar uma label para identificar um laço, e então usar break ou continue para indicar quando o programa deverá interromper o laço ou continuar sua execução.

*/

let num = 0
if (true)
{
    loopnumeros: while (num < 100)
    {
        num++
        for (let i = 0; i < 1; i++)
        {
            if (num == 2) 
                break; // encerra o loop for e mostra 2
        }
        for (let i = 0; i < 1; i++)
        {
            if (num == 4) 
                break loopnumeros; // encerra o loop while e não mostra 4
        }
        console.log(num)
    }
    console.log("Loop terminou")
}
  







