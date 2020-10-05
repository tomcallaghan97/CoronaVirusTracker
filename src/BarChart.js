import React, {Component} from 'react';
import Chart from "chart.js";


class BarChart extends Component {
    myChart;
    chartRef = React.createRef();
    constructor(){
        super();
        this.state={
            casesList:[],
            country: null,
            language: 'en',
            phrases: [{"lang":"en","totalCases":"Total cases", "totalDeaths": "Total deaths", "active":"Active","recovered":"Recovered","todayCases":"Today cases","todayDeaths":"Today deaths",  "errorMsg":"Please, input a country.","title":"Coronavirus Statistics","language": "Language","country":"Country"}],
            phrase: null
        };
        this.state.phrase = this.state.phrases[0];
        document.title = this.state.phrase.title;
    }
    
     renderTableData() {
        fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
        {  
            headers: {
              'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com', 
              'X-RapidAPI-Key': 'd2be6cb091msh3947f8fd6c13878p17991djsnfa2142ace598'
            }
        })
            .then(results=>{
            console.log(results);
            return results.json();
        })
        .then(data => {
            console.log(data);
            let casesList = [];
            let countriesList = [];
            data.countries_stat.map((c)=>{
                return(
                    casesList.push({"cases": c.cases.replace(',',''), "country":c.country_name, "deaths":c.deaths.replace(',',''), "recovered":c.total_recovered.replace(',',''), "todayDeaths":c.new_deaths.replace(',',''), "todayCases":c.new_cases.replace(',',''), "active":c.active_cases.replace(',','')}),
                    countriesList.push(c.country_name)
                )
            });
            this.drawChartJS(casesList);            
            this.setState({casesList: casesList});
        })
     }
     componentDidMount() {
      this.renderTableData();
    }
    getTimeline()
    {
        if(this.state.country !== undefined && this.state.country !== null)
        {
            window.location.href = '/timechart/country/'+this.state.country;
        }
        else{
            alert(this.state.phrase.errorMsg);
        }
    }
    drawChartJS(casesList, str, orderBy){
        if(str == null)
        {
            str="";
        }
        const myChartRef = this.chartRef.current.getContext("2d");
        let deathList = [];
        let countryList = [];
        let caseList = [];
        let todayDeathsList = [];
        let todayCasesList = [];
        let activeList = [];
        let recoveredList = [];
        
        switch(orderBy){
            case "cases":
                casesList.sort((a, b) => (parseInt(a.cases) > parseInt(b.cases)) ? -1 : 1);
                break;
            case "deaths":
                casesList.sort((a, b) => (parseInt(a.deaths) > parseInt(b.deaths)) ? -1 : 1);
                break;
            case "todayCases":
                casesList.sort((a, b) => (parseInt(a.todayCases) > parseInt(b.todayCases)) ? -1 : 1);
                break;
            case "todayDeaths":
                casesList.sort((a, b) => (parseInt(a.todayDeaths) > parseInt(b.todayDeaths)) ? -1 : 1);
                break;
            default:
                casesList.sort((a, b) => (parseInt(a.cases) > parseInt(b.cases)) ? -1 : 1);
                break;
        }

        for(let i = 0; i<casesList.length;i++)
        {
            if(casesList[i].country.toLowerCase().includes(str.toLowerCase()) && i < 24){
                deathList.push(casesList[i].deaths);
                countryList.push(casesList[i].country);
                caseList.push(casesList[i].cases);
                todayDeathsList.push(casesList[i].todayDeaths);
                todayCasesList.push(casesList[i].todayCases);
                activeList.push(casesList[i].active);
                recoveredList.push(casesList[i].recovered)
            }
        }
        if(str !== null && str !== "")
        {
            try{
                this.setState({
                    country:  countryList[0]
                  })
            }
            catch{}
        }
        let datasetBars = [];
        let phrase = this.state.phrases[1];
        for (let index = 0; index < this.state.phrases.length; index++) {
            if(this.state.phrases[index].lang === this.state.language)
            {
                phrase = this.state.phrases[index];   
            }
        }
        this.setState({
            phrase:  phrase
        })      
        document.title = phrase.title;

        let dataType = "bar";
        if(str==="")
        {
            dataType = "line";
        }
        datasetBars = [{
            label: phrase.totalDeaths,
            type: dataType,
            data: deathList,
            backgroundColor: "#009933",
            borderColor: "#009933",
            fill: "#009933",
          },
        {                    
            label: phrase.totalCases,
            data: caseList,
            type: dataType,
            backgroundColor:" #003366",
            borderColor:" #003366",
            fill:" #003366",
        },
        {
            label: phrase.todayCases,
            type: dataType,
            backgroundColor:"#B67721",
            borderColor:"#B67721",
            fill:"#B67721",
            data: todayCasesList,
        },
        {
            label: phrase.todayDeaths,
            type: dataType,
            backgroundColor: "#B6212D",
            borderColor: "#B6212D",
            data: todayDeathsList,
            labels: todayDeathsList
        }
      ];
        
        try{
            this.myChart.destroy();
        }
        catch{}

      this.myChart = new Chart(myChartRef, {
          type: "bar",
          
          data: {
              labels: countryList,
              datasets: datasetBars
          },
          options: { 
              maintainAspectRatio: false,
              responsive: true
          }
      });
      this.myChart.canvas.parentNode.style.height = '70vh';
    }
    
      async changeLanguage(lang) {
        await this.setState({
          language:  lang
        })
        this.drawChartJS(this.state.casesList);
      }


    render(){
     return (
     <div>
    <h1 className= "header">{this.state.phrase.title}</h1>
    <div className= "infoData">
        <div className="infoData1">
            {/* {this.state.phrase.country} */}
            <input className="infoChild" placeholder={'Type a country'} onChange={(e) => this.drawChartJS(this.state.casesList, e.target.value)} ></input>
        </div>
        <div className="infoData2">
            <select className="infoChild" onChange={(e)=>this.drawChartJS(this.state.casesList,"",e.target.value)}>
                <option value="cases">{this.state.phrase.totalCases}</option>
                <option value="deaths">{this.state.phrase.totalDeaths}</option>
                <option value="todayCases">{'Number of today cases'}</option>
                <option value="todayDeaths">{'Number of today deaths'}</option>
            </select>
        </div>
    </div>
        <canvas id="myChart" ref={this.chartRef}/>
        <div className="message">
            <h2 className="messageText">Stay Safe and Stay at Home</h2>
        </div>
    </div>

    )
    }
  }
      
  export default BarChart;