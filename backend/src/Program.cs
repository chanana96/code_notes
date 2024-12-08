using Microsoft.EntityFrameworkCore;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var Origins = "_Origins";

builder.Services.AddControllers();

builder.Services.AddOpenApi();

builder.Services.AddCors(options => 
{
    options.AddPolicy(name: Origins, policy =>{
        policy.WithOrigins("https://localhost:3000");
    }
    );
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors(Origins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
