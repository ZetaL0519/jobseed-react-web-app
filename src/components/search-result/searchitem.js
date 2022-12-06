const SearchItem = ({
    job = {
    "_id": 123,
    "date": " 30+ days ago",
    "jobtitle": "Social Media Digital Manager",
    "companyname": "Dan Newlin Injury Attorneys",
    "location": "Chicago, IL",
    "salary": "$100,000 a year",
    "url": "https://www.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0BfADaYbM3iMmTbsn5eGWYN8u79ZtznUGFNVKmF6cD7sC5k4urPXytCQgnljtFf3L3PusF0y4rA2EjY4wLrnr-KbDDrRdSzGRIvM5sW-X2ypreys0U1KvuejMmhIhXEzW5IR8lomYFmMqD1WCAD4IeCAnoSBncli4BCmB9fRNzrNj5Mibvg6rMQvMLQKdbZEpiRvgowXvhIbx7rRhV4-QX-3Ulum50IpdXVZ-b1hfwh-I-3fyXgfXK19fo6WBQw2Dg07sXOVlvpkX9zmpUVxMWfnpYo4mmtDXvY2qbb0me654lExCfllUB2QZHycjiUD4RphvZzO7R05qF1C83Mt0gTKR87Mea9BjSLs6duAipHdVFRCURdwEs7mWL8nKsW0Pdds7n6hHRe5ExcvX3NBRtD9tt7OiHgk1Is5ApyUuM1obMoGi0j8qC6W6dcGt3vJI4FdkEg-i9YcpaPDA1i8p0U6OvCHZPOcn-PhiHPGjDBbJ70t66GxbTE=&xkcb=SoC-M3b93ptKSsGJ0LbzkdCdPP&p=1&fvj=1&vjs=3",
     "summary": "Salary 100k plus bonus structure."
    }
}) => {
    <div className="card border-success mb-3">
      <div className="card-header bg-transparent border-success">{job.companyname}</div>
      <div className="card-body text-success">
        <h5 className="card-title">{job.jobtitle}</h5>
        <p className="card-text">{job.location}</p>
        <p className="card-text">{job.salary}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
            <button className="btn btn-success"
                    type="submit"
                    >
                Apply
            </button>
      </div>
    </div>
}

export default SearchItem;